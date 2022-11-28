<?php

namespace App\Controller;

use App\Entity\Annonce;
use App\Entity\Contributor;
use App\Entity\Donation;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use function PHPUnit\Framework\isEmpty;

class MainController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {

        return $this->render('index.html.twig');
    }

    /**
     * @Route("/api/store-campaign", name="storeCampaign")
     * @return JsonResponse
     */
    public function storeCampaign(ManagerRegistry $doctrine, Request $request):Response
    {

        $r = json_decode($request->getContent(), true);

        $valide = [
            'valide' => false
        ];

        $user = $doctrine->getRepository(User::class)->findOneBy(['metamask' => $r['address']]);

        if (!$user) {
            throw $this->createNotFoundException(
                'you do not exist bru'
            );
        }
        $entityManager = $doctrine->getManager();


        if(isset($r['id']))
        {
            // Edition annonce existante
            $campaign = $doctrine->getRepository(Annonce::class)->findOneBy(['id' => $r['id']]);
        }else
        {
            // Création annonce
            $campaign = new Annonce();
            $campaign->setCreatedAt(new \DateTimeImmutable());
            $campaign->setOwner($user);
            $campaign->setImage($r['banner']);
            $campaign->setState(1);
            $campaign->setStake(0);
            $campaign->setProfit(0);
        }
        $campaign->setProfit(0);
        $campaign->setTitle($r['title']);
        $campaign->setTagline($r['tagline']);
        $campaign->setDescription($r['description']);
        $campaign->setGoal($r['goal']);
        $campaign->setCategory($r['category']);
        $campaign->setAddress($r['lastaddress']);


        $entityManager->persist($campaign);
        $entityManager->flush();


        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($valide));

        return $response;
    }

    /**
     * @Route("/api/get-campaign", name="getCampaign")
     * @return JsonResponse
     */
    public function getCampaign(ManagerRegistry $doctrine, Request $request):Response
    {

        $r = json_decode($request->getContent(), true);

        $campaign = $doctrine->getRepository(Annonce::class)->findOneBy(['id' => $r['id']]);

        if (!$campaign) {
            throw $this->createNotFoundException(
                'you do not exist bru'
            );
        }
        $donations = $campaign->getContributors();
        $reponse = [
            'title' => $campaign->getTitle(),
            'description' => $campaign->getDescription(),
            'goal' => $campaign->getGoal(),
            'tagline' => $campaign->getTagline(),
            'image_1' => $campaign->getImage(),
            'image_2' => $campaign->getImage2(),
            'image_3' => $campaign->getImage3(),
            'profit' => $campaign->getProfit(),
            'stake' => $campaign->getStake(),
            'address' => $campaign->getAddress(),
            'owner' => ['name' => $campaign->getOwner()->getName(), 'address' => $campaign->getOwner()->getMetamask()],
            'donations' => $donations
        ];
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($reponse));

        return $response;
    }
    /**
     * @Route("/api/get-user-name", name="getUserName")
     * @return JsonResponse
     */
    public function getUserName(ManagerRegistry $doctrine, Request $request):Response
    {

        $r = json_decode($request->getContent(), true);



        $user = $doctrine->getRepository(User::class)->findOneBy(['metamask' => $r['address']]);

        if (!$user) {
            throw $this->createNotFoundException(
                'you do not exist bru'
            );
        }
        $reponse = [
            'name' => $user->getName()
        ];

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($reponse));

        return $response;
    }

    /**
     * @Route("/api/set-user-name", name="setUserName")
     * @return JsonResponse
     */
    public function setUserName(ManagerRegistry $doctrine, Request $request):Response
    {

        $r = json_decode($request->getContent(), true);



        $user = $doctrine->getRepository(User::class)->findOneBy(['metamask' => $r['address']]);

        if (!$user) {
            throw $this->createNotFoundException(
                'you do not exist bru'
            );
        }
        $entityManager = $doctrine->getManager();

        $user->setName($r['name']);

        $entityManager->persist($user);

        $entityManager->flush();

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['check' => true]));

        return $response;
    }


    /**
     * @Route("/api/store-user", name="storeUser")
     * @return JsonResponse
     */
    public function storeUser(ManagerRegistry $doctrine, Request $request):Response
    {

        $r = json_decode($request->getContent(), true);

        $valide = [
            'valide' => false
        ];

        $user = $doctrine->getRepository(User::class)->findOneBy(['metamask' => $r['address']]);

        if ($user) {
            throw $this->createNotFoundException(
                'user already existed'
            );
        }
        $entityManager = $doctrine->getManager();
        $user = new User();
        $user->setMetamask($r['address']);
        $user->setAnnonceur(false);

        $entityManager->persist($user);

        $entityManager->flush();


        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($r));

        return $response;
    }


    /**
     * @Route("/api/get-contributor", name="getContributor")
     * @return JsonResponse
     */
    public function getContribut(ManagerRegistry $doctrine, Request $request):Response
    {

        $r = json_decode($request->getContent(), true);

        $campaign = $doctrine->getRepository(Annonce::class)->findOneBy(['id' => $r['id']]);

        if (!$campaign) {
            throw $this->createNotFoundException(
                'you do not exist bru'
            );
        }
        $contributors = $campaign->getContributors();
        $cb = ['stake' => '0'];
        foreach ($contributors as $contributor){
            if ($contributor->getUser()->getMetamask() == $r['address'])
            {
                $cb['stake'] = $contributor->getTotalAmount();
            }
        }
        $reponse = [
            'title' => $campaign->getTitle(),
        ];
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($cb));

        return $response;
    }



    /**
     * @Route("/api/get-campaign-all", name="getCampaignall")
     * @return JsonResponse
     */
    public function getallCampaigns(ManagerRegistry $doctrine, Request $request):Response
    {



        $annonces = $doctrine->getRepository(Annonce::class)->findAll();

        $campaigns = [];
        foreach ($annonces as $annonce)
        {
            $reponse = [
                'id' => $annonce->getId(),
                'title' => $annonce->getTitle(),
                'description' => $annonce->getDescription(),
                'goal' => $annonce->getGoal(),
                'tagline' => $annonce->getTagline(),
                'image_1' => $annonce->getImage(),
                'image_2' => $annonce->getImage2(),
                'image_3' => $annonce->getImage3(),
                'profit' => $annonce->getProfit(),
                'staked' => $annonce->getStake(),
                'owner' => ['name' => $annonce->getOwner()->getName(), 'address' => $annonce->getOwner()->getMetamask()],
                'category' => $annonce->getCategory()
            ];
            array_push($campaigns, $reponse);
        }

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($campaigns));

        return $response;
    }


    /**
     * @Route("/api/set-donation", name="setDonation")
     * @return JsonResponse
     */
    public function setDonatione(ManagerRegistry $doctrine, Request $request):Response
    {

        $r = json_decode($request->getContent(), true);



        $user = $doctrine->getRepository(User::class)->findOneBy(['metamask' => $r['userAddress']]);
        $campaign =  $doctrine->getRepository(Annonce::class)->findOneBy(['address' => $r['annonceAddress']]);
        if (!$user || !$campaign)
        {
            throw $this->createNotFoundException(
                'you do not exist bru'
            );
        }

        $contributors =  $doctrine->getRepository(Contributor::class)->findBy(['user' => $user]);
        foreach ($contributors as $contributor)
        {

            if ($contributor->getAnnonce() == $campaign )
            {
                $cb = $contributor;
            }
        }





        $entityManager = $doctrine->getManager();
        if (!isset($cb))
        {

            $cb = new Contributor();
            $cb->setCreatedAt(new \DateTimeImmutable());
            $cb->setAnnonce($campaign);
            $cb->setUser($user);
            $entityManager->persist($cb);
            $entityManager->flush();
        }



        $cb->setTotalAmount($cb->getTotalAmount() + $r['value']);
        $entityManager->persist($cb);
        $entityManager->flush();

        $user->setStake($user->getStake() + $r['value']);
        $entityManager->persist($user);
        $campaign->setStake($campaign->getStake() + $r['value']);
        $entityManager->persist($campaign);
        $entityManager->flush();

        $don = new Donation();
        $don->setContributor($cb);
        $don->setCreatedAt(new \DateTimeImmutable());
        $don->setAmount($r['value']);
        $entityManager->persist($don);
        $entityManager->flush();

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['check' => true]));

        return $response;
    }



    /**
     * @Route("/api/get-donation-all", name="getDonationall")
     * @return JsonResponse
     */
    public function getAllDonations(ManagerRegistry $doctrine, Request $request):Response
    {
        $r = json_decode($request->getContent(), true);

        $campaign =  $doctrine->getRepository(Annonce::class)->findOneBy(['id' => $r['id']]);
        $donations = [];

        $cbtors =  $doctrine->getRepository(Contributor::class)->findBy(['annonce' => $campaign]);

        foreach ($cbtors as $cb)
        {
            foreach($cb->getDonations() as $dd)
            {
                array_push($donations, $dd);
            }
        }
        $dons= [];
        foreach ($donations as $donation)
        {
            $reponse = [
                'id' => $donation->getId(),
                'amount' => $donation->getAmount(),
                'contributor' => $donation->getContributor()->getUser()->getName(),
                'time' => $donation->getCreatedAt()
            ];
            array_push($dons, $reponse);
        }

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($dons));

        return $response;
    }

    /**
     * @Route("/api/set-roll", name="setRoll")
     * @return JsonResponse
     */
    public function setRoll(ManagerRegistry $doctrine, Request $request):Response
    {
        $r = json_decode($request->getContent(), true);

        $user = $doctrine->getRepository(User::class)->findOneBy(['metamask' => $r['userAddress']]);

        $lr = $user->getLastroll();


        $entityManager = $doctrine->getManager();
        $user->setLastroll(new \DateTime());
        $user->setWin($r['win']);
        $entityManager->persist($user);
        $entityManager->flush();

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['check' => true]));

        return $response;
    }


    /**
     * @Route("/api/check-roll", name="checkRoll")
     * @return JsonResponse
     */
    public function checkRoll(ManagerRegistry $doctrine, Request $request):Response
    {
        $check = false;
        $r = json_decode($request->getContent(), true);

        $user = $doctrine->getRepository(User::class)->findOneBy(['metamask' => $r['userAddress']]);

        $lr = $user->getLastroll();

        $nr = new \DateTime();
        if ($lr !== null)
        {
            $diff = $lr->getTimestamp() - $nr->getTimestamp();
            if ($diff < -120)
            {
                $check = true;
            }
        }else
        {
            $check = true;
        }



        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['check' => $check]));

        return $response;
    }

    /**
     * @Route("/api/remove-donation", name="removeDonation")
     * @return JsonResponse
     */
    public function removeDonation(ManagerRegistry $doctrine, Request $request):Response
    {
        $entityManager = $doctrine->getManager();
        $r = json_decode($request->getContent(), true);



        $user = $doctrine->getRepository(User::class)->findOneBy(['metamask' => $r['userAddress']]);
        $campaign =  $doctrine->getRepository(Annonce::class)->findOneBy(['address' => $r['annonceAddress']]);
        if (!$user || !$campaign)
        {
            throw $this->createNotFoundException(
                'you do not exist bru'
            );
        }
        $user->setStake($user->getStake() - $r['value']);
        $entityManager->persist($user);
        $campaign->setStake($campaign->getStake() - $r['value']);
        $entityManager->persist($campaign);


        $cb = [];
        $contributors =  $doctrine->getRepository(Contributor::class)->findBy(['user' => $user]);
        foreach ($contributors as $contributor)
        {
            if ($contributor->getAnnonce() == $campaign )
            {
                $cb = $contributor;
            }
        }

        if (!isset($cb))
        {
            $cb = new Contributor();
            $cb->setCreatedAt(new \DateTimeImmutable());
            $cb->setAnnonce($campaign);
            $cb->setUser($user);
            $entityManager->persist($cb);
            $entityManager->flush();
        }


        $cb->setTotalAmount($cb->getTotalAmount() - $r['value']);

        $entityManager->persist($cb);
        $entityManager->flush();
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['check' => true]));

        return $response;
    }





    /**
     * @Route("/api/get-campaign-userr", name="getCampaignUserr")
     * @return JsonResponse
     */
    public function getCampaignUserr(ManagerRegistry $doctrine, Request $request):Response
    {

        $r = json_decode($request->getContent(), true);



        $user = $doctrine->getRepository(User::class)->findOneBy(['metamask' => $r['id']]);

        $annonces = $doctrine->getRepository(Annonce::class)->findBy(['owner' => $user]);

        $campaigns = [];
        foreach ($annonces as $annonce)
        {
            $reponse = [
                'id' => $annonce->getId(),
                'title' => $annonce->getTitle(),
                'description' => $annonce->getDescription(),
                'goal' => $annonce->getGoal(),
                'tagline' => $annonce->getTagline(),
                'image_1' => $annonce->getImage(),
                'image_2' => $annonce->getImage2(),
                'image_3' => $annonce->getImage3(),
                'profit' => $annonce->getProfit(),
                'staked' => $annonce->getStake(),
                'owner' => ['name' => $annonce->getOwner()->getName(), 'address' => $annonce->getOwner()->getMetamask()],
                'category' => $annonce->getCategory()
            ];
            array_push($campaigns, $reponse);
        }

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($campaigns));

        return $response;
    }

    /**
     * @Route("/api/get-campaign-ownerr", name="getCampaignownerr")
     * @return JsonResponse
     */
    public function getCampaignownerr(ManagerRegistry $doctrine, Request $request):Response
    {

        $r = json_decode($request->getContent(), true);


        $campaigns = [];
        $user = $doctrine->getRepository(User::class)->findOneBy(['metamask' => $r['id']]);
        $cbs = $doctrine->getRepository(Contributor::class)->findBy(['user' => $user]);
        foreach ($cbs as $cb)
        {
            if ($cb->getTotalAmount() != 0)
            {
                $reponse = [
                    'id' => $cb->getAnnonce()->getId(),
                    'title' => $cb->getAnnonce()->getTitle(),
                    'description' => $cb->getAnnonce()->getDescription(),
                    'goal' => $cb->getAnnonce()->getGoal(),
                    'tagline' => $cb->getAnnonce()->getTagline(),
                    'image_1' => $cb->getAnnonce()->getImage(),
                    'image_2' => $cb->getAnnonce()->getImage2(),
                    'image_3' => $cb->getAnnonce()->getImage3(),
                    'profit' => $cb->getAnnonce()->getProfit(),
                    'staked' => $cb->getAnnonce()->getStake(),
                    'owner' => ['name' => $cb->getAnnonce()->getOwner()->getName(), 'address' => $cb->getAnnonce()->getOwner()->getMetamask()],
                    'category' => $cb->getAnnonce()->getCategory()
                ];
                array_push($campaigns, $reponse);

            }
        }

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($campaigns));

        return $response;
    }

}

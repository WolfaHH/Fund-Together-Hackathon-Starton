<?php

namespace App\Controller;

use App\Entity\Annonce;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

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

        // Création annonce
        $campaign = new Annonce();
        $campaign->setCreatedAt(new \DateTimeImmutable());
        $campaign->setDescription($r['description']);
        $campaign->setGoal($r['goal']);
        $campaign->setImage($r['banner']);
        $campaign->setOwner($user);
        $campaign->setState(1);
        $entityManager->persist($campaign);
        $entityManager->flush();


        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($valide));

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


}

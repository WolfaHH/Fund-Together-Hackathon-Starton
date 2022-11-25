<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $metamask = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $mail = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $phone = null;

    #[ORM\Column(nullable: true)]
    private ?bool $annonceur = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\OneToMany(mappedBy: 'owner', targetEntity: Annonce::class)]
    private Collection $annonces;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Contributor::class)]
    private Collection $contributors;

    #[ORM\Column(nullable: true)]
    private ?int $stake = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $lastroll = null;

    #[ORM\Column(nullable: true)]
    private ?int $win = null;

    public function __construct()
    {
        $this->annonces = new ArrayCollection();
        $this->contributors = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getMetamask(): ?string
    {
        return $this->metamask;
    }

    public function setMetamask(string $metamask): self
    {
        $this->metamask = $metamask;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(?string $mail): self
    {
        $this->mail = $mail;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function isAnnonceur(): ?bool
    {
        return $this->annonceur;
    }

    public function setAnnonceur(?bool $annonceur): self
    {
        $this->annonceur = $annonceur;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(?\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * @return Collection<int, Annonce>
     */
    public function getAnnonces(): Collection
    {
        return $this->annonces;
    }

    public function addAnnonce(Annonce $annonce): self
    {
        if (!$this->annonces->contains($annonce)) {
            $this->annonces->add($annonce);
            $annonce->setOwner($this);
        }

        return $this;
    }

    public function removeAnnonce(Annonce $annonce): self
    {
        if ($this->annonces->removeElement($annonce)) {
            // set the owning side to null (unless already changed)
            if ($annonce->getOwner() === $this) {
                $annonce->setOwner(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Contributor>
     */
    public function getContributors(): Collection
    {
        return $this->contributors;
    }

    public function addContributor(Contributor $contributor): self
    {
        if (!$this->contributors->contains($contributor)) {
            $this->contributors->add($contributor);
            $contributor->setUser($this);
        }

        return $this;
    }

    public function removeContributor(Contributor $contributor): self
    {
        if ($this->contributors->removeElement($contributor)) {
            // set the owning side to null (unless already changed)
            if ($contributor->getUser() === $this) {
                $contributor->setUser(null);
            }
        }

        return $this;
    }

    public function getStake(): ?int
    {
        return $this->stake;
    }

    public function setStake(?int $stake): self
    {
        $this->stake = $stake;

        return $this;
    }

    public function getLastroll(): ?\DateTimeInterface
    {
        return $this->lastroll;
    }

    public function setLastroll(?\DateTimeInterface $lastroll): self
    {
        $this->lastroll = $lastroll;

        return $this;
    }

    public function getWin(): ?int
    {
        return $this->win;
    }

    public function setWin(?int $win): self
    {
        $this->win = $win;

        return $this;
    }
}

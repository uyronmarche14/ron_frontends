"use client";
import React, { useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { FaGithub, FaShare } from "react-icons/fa";
import { useRouter } from "next/navigation";
import PreviewModal from "@/app/components/design/card/modal/demo_modal/page";
import ShareModal from "@/app/components/design/card/modal/share_modal/page";

interface ActionButtonProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant: "default" | "primary";
}

const useExternalLink = (url: string) => {
  const handleClick = React.useCallback(() => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, [url]);

  return handleClick;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  href,
  onClick,
  variant,
}) => {
  const handleClick = href ? useExternalLink(href) : onClick;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        inline-flex items-center justify-center gap-2 rounded-lg px-4 h-10 text-sm font-medium
        transition-all duration-200
        ${
          variant === "primary"
            ? "bg-primary-light/10 text-primary hover:bg-primary-light/20"
            : "bg-background-dark text-text hover:bg-accent-light/10"
        }
      `}
      aria-label={label}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

export const Dropdown: React.FC = React.memo(() => {
  const [showModal, setShowModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenShareModal = () => {
    setShareModal(true);
  };

  const handleCloseShareModal = () => {
    setShareModal(false);
  };

  const actionButtons: ActionButtonProps[] = [
    {
      id: "code",
      label: "Code",
      icon: <FaGithub className="text-lg" />,
      href: "#",
      variant: "primary",
    },
    {
      id: "preview",
      label: "Preview",
      icon: <HiPhoto className="text-lg" />,
      onClick: handleOpenModal,
      variant: "default",
    },
  ];

  return (
    <>
      <PreviewModal isOpen={showModal} onClose={handleCloseModal} />
      <ShareModal isOpen={shareModal} onClose={handleCloseShareModal} />

      <div
        className="flex gap-2 justify-between"
        role="group"
        aria-label="Project actions"
      >
        <div className="flex gap-2">
          {actionButtons.map((button) => (
            <ActionButton key={button.id} {...button} />
          ))}
        </div>
        <button
          className="p-3 rounded-lg hover:bg-background-dark transition-colors"
          onClick={handleOpenShareModal}
        >
          <FaShare className="text-text-light hover:text-primary" />
        </button>
      </div>
    </>
  );
});

export default Dropdown;

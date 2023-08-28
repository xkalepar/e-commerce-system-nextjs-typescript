"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export function StoreModal() {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="create store"
      desc="add a new store to mange products and categories"
      onClose={storeModal.onClose}
      isOpen={storeModal.isOpen}>
      Feature Create Store Form
    </Modal>
  );
}

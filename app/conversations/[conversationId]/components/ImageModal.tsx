"use client"

import Modal from "@/app/components/Modal"
import Image from "next/image"
import { FC } from "react"

interface IImageModal {
  isOpen?: boolean
  onClose: () => void
  src?: string | null
}

const ImageModal: FC<IImageModal> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=" w-96 h-96">
        <Image alt="image" className=" object-contain" fill src={src} />
      </div>
    </Modal>
  )
}

export default ImageModal

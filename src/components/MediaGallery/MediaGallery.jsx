import { useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { FaPlay, FaYoutube } from 'react-icons/fa'
import styles from './MediaGallery.module.css'

const MediaGallery = () => {
  const [titleRef, titleVisible] = useIntersectionObserver()
  const [selectedImage, setSelectedImage] = useState(null)

  // YouTube video IDs - replace with your actual video IDs
  const videos = [
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video ID
      title: 'Robotics Tutorial - Getting Started',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video ID
      title: 'Arduino Basics Explained',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video ID
      title: 'IoT Project Walkthrough',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
  ]

  // Sample images - replace with your actual images
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      alt: 'Robot Project'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      alt: 'Electronics Setup'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'IoT Device'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      alt: 'Workshop Session'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      alt: 'Tech Learning'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      alt: 'Hands-on Learning'
    },
  ]

  const openImageModal = (image) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="media" className={styles.mediaGallery}>
      <div className={styles.container}>
        <h2 
          ref={titleRef}
          className={`${styles.sectionTitle} ${titleVisible ? styles.visible : ''}`}
        >
          Media <span className={styles.titleAccent}>Gallery</span>
        </h2>

        {/* Videos Section */}
        <div className={styles.videosSection}>
          <h3 className={styles.subsectionTitle}>
            <FaYoutube className={styles.icon} />
            Video Tutorials
          </h3>
          <div className={styles.videosGrid}>
            {videos.map((video, index) => (
              <div key={index} className={styles.videoCard}>
                <div className={styles.videoWrapper}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.videoIframe}
                  ></iframe>
                </div>
                <h4 className={styles.videoTitle}>{video.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Images Section */}
        <div className={styles.imagesSection}>
          <h3 className={styles.subsectionTitle}>Photo Gallery</h3>
          <div className={styles.imagesGrid}>
            {images.map((image) => (
              <div
                key={image.id}
                className={styles.imageCard}
                onClick={() => openImageModal(image)}
              >
                <img src={image.src} alt={image.alt} />
                <div className={styles.imageOverlay}>
                  <FaPlay className={styles.zoomIcon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeImageModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeImageModal}>
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  )
}

export default MediaGallery

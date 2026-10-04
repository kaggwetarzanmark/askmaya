const images = [
  { src: 'https://images.pexels.com/photos/4239038/pexels-photo-4239038.jpeg?auto=compress&cs=tinysrgb&w=500', alt: 'Kitchen deep clean' },
  { src: 'https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&w=500', alt: 'Sofa after shampooing' },
  { src: 'https://images.pexels.com/photos/6197117/pexels-photo-6197117.jpeg?auto=compress&cs=tinysrgb&w=500', alt: 'Office after cleaning' },
  { src: 'https://images.pexels.com/photos/6873087/pexels-photo-6873087.jpeg?auto=compress&cs=tinysrgb&w=500', alt: 'Car interior detail' },
  { src: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=500', alt: 'Post-construction clean' },
  { src: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=500', alt: 'Carpet cleaning result' },
]

export default function GalleryStrip() {
  return (
    <div className="gallery-grid">
      {images.map((img) => (
        <div key={img.src} className="gallery-item">
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      ))}
    </div>
  )
}

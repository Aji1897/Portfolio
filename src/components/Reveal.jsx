import { motion } from 'framer-motion'

function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  once = true,
  ...props
}) {
  // Map custom element names to Framer Motion tags
  const MotionComponent = motion[as] || motion.div

  // Check if system prefers reduced motion
  const prefersReduced = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  if (prefersReduced) {
    const CustomTag = as
    return (
      <CustomTag className={className} {...props}>
        {children}
      </CustomTag>
    )
  }

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once, margin: "-12% 0px -12% 0px" }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.215, 0.61, 0.355, 1.0] // EaseOutCubic
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

export default Reveal

"use client"

import { useEffect, useMemo, useRef } from 'react'

type Speed = "slow" | "fast"

type WavyBackgroundProps = {
    children?: React.ReactNode
    className?: string
    containerClassName?: string
    colors?: string[]
    waveWidth?: number
    backgroundFill?: string
    blur?: number
    speed?: Speed
    waveOpacity?: number
}

export function WavyBackground({
    children,
    className,
    containerClassName,
    colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
    waveWidth = 50,
    backgroundFill = "black",
    blur = 8,
    speed = "fast",
    waveOpacity = 0.5,
}: WavyBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const animationRef = useRef<number | null>(null)
    const prefersReduced = useMemo(() => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let frame = 0

        const resize = () => {
            const { innerWidth, innerHeight } = window
            canvas.width = innerWidth
            canvas.height = innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const drawFrame = (localFrame: number) => {
            const w = canvas.width
            const h = canvas.height
            ctx.clearRect(0, 0, w, h)
            ctx.fillStyle = backgroundFill
            ctx.fillRect(0, 0, w, h)

            ctx.save()
            if (blur > 0) {
                // blur the wave layers slightly for a soft glow
                ;(ctx as any).filter = `blur(${blur}px)`
            }

            const amplitude = Math.max(24, h * 0.06)
            const baseY = h * 0.6
            const speedFactor = speed === 'fast' ? 0.02 : 0.008

            for (let i = 0; i < colors.length; i++) {
                const color = colors[i]
                const offset = i * 0.8
                ctx.beginPath()
                for (let x = 0; x <= w; x += 2) {
                    const theta = (x / waveWidth) + (localFrame * speedFactor) + offset
                    const y = baseY + Math.sin(theta) * amplitude * (1 - i / (colors.length + 1))
                    if (x === 0) ctx.moveTo(x, y)
                    else ctx.lineTo(x, y)
                }
                ctx.lineTo(w, h)
                ctx.lineTo(0, h)
                ctx.closePath()
                ctx.fillStyle = hexToRgba(color, waveOpacity)
                ctx.fill()
            }

            ctx.restore()
        }

        const animate = () => {
            drawFrame(frame)
            frame++
            animationRef.current = requestAnimationFrame(animate)
        }

        if (!prefersReduced) {
            animate()
        } else {
            // Render a single static frame for reduced motion users
            drawFrame(0)
        }

        return () => {
            window.removeEventListener('resize', resize)
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [colors, waveWidth, backgroundFill, blur, speed, waveOpacity, prefersReduced])

    return (
        <div className={`relative ${containerClassName ?? ''}`}>
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
            <div className={`relative z-10 ${className ?? ''}`}>
                {children}
            </div>
        </div>
    )
}

function hexToRgba(hex: string, alpha: number) {
    const sanitized = hex.replace('#', '')
    const bigint = parseInt(sanitized.length === 3 ? sanitized.split('').map(c => c + c).join('') : sanitized, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}



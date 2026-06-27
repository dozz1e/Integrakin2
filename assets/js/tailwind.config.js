tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1075B4', // Azul corporativo Integrakin
                secondary: '#F5F5F7', // Gris técnico claro (Apple Style)
                accent: '#BD00FF', // Púrpura tecnológico
                surface: '#F3F3F5', // Gris editorial suave para profundidad
                muted: '#86868B', // Gris suave editorial
                obsidiana: '#111827', // Fondo oscuro premium
            },
            fontSize: {
                'xxs': '0.625rem', // 10px
                'tiny': '0.5rem',  // 8px
                '10xl': '10rem',
                '12xl': '12rem',
            },
            spacing: {
                '150': '37.5rem',
                '175': '43.75rem',
                '200': '50rem',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                sync: ['Syncopate', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 40s linear infinite',
                'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                reveal: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        }
    }
}

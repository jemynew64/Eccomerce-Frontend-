    import { Link } from 'react-router-dom'
    import Logo from '../components/ui/Logo'

    export default function Registro() {
    return (
        <div
        className="font-display bg-background-dark text-white antialiased min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative"
        >
        {/* Header */}
        <header className="absolute top-0 left-0 w-full px-4 sm:px-10 py-5">
            <div className="flex items-center gap-4 text-white">
            <div className="h-6 w-6 text-primary">
                <Logo className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-white text-xl font-bold tracking-[-0.015em]">
                AnimeVerse
            </h2>
            </div>
        </header>

        {/* Main content */}
        <main className="w-full max-w-md bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg p-6 sm:p-8 lg:p-10">
            <div className="text-center">
            <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                Crea tu cuenta en AnimeVerse
            </h1>
            <p className="text-[#caab91] text-base font-normal mt-3">
                Comienza tu viaje en el mundo del merchandising de anime.
            </p>
            </div>

            <form className="mt-8 space-y-6">
            {/* Full name */}
            <div>
                <label className="flex flex-col">
                <p className="text-white text-base font-medium pb-2">Nombre completo</p>
                <input
                    className="flex w-full rounded-lg text-white bg-[#483423]/50 focus:bg-[#483423]/80 focus:ring-2 focus:ring-primary h-14 placeholder:text-[#caab91]/70 p-4 text-base transition-all outline-none border-none"
                    placeholder="Ingresa tu nombre completo"
                    type="text"
                />
                </label>
            </div>

            {/* Email */}
            <div>
                <label className="flex flex-col">
                <p className="text-white text-base font-medium pb-2">Correo electrónico</p>
                <input
                    className="flex w-full rounded-lg text-white bg-[#483423]/50 focus:bg-[#483423]/80 focus:ring-2 focus:ring-primary h-14 placeholder:text-[#caab91]/70 p-4 text-base transition-all outline-none border-none"
                    placeholder="Ingresa tu correo electrónico"
                    type="email"
                />
                </label>
            </div>

            {/* Password */}
            <div>
                <label className="flex flex-col">
                <p className="text-white text-base font-medium pb-2">Contraseña</p>
                <div className="relative flex items-stretch w-full">
                    <input
                    className="flex w-full rounded-lg text-white bg-[#483423]/50 focus:bg-[#483423]/80 focus:ring-2 focus:ring-primary h-14 placeholder:text-[#caab91]/70 p-4 pr-12 text-base transition-all outline-none border-none"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                    />
                    <button
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#caab91] hover:text-white"
                    type="button"
                    >
                    <span className="material-symbols-outlined">visibility</span>
                    </button>
                </div>
                </label>
            </div>

            {/* Phone */}
            <div>
                <label className="flex flex-col">
                <p className="text-white text-base font-medium pb-2">
                    Número de teléfono <span className="text-[#caab91]/80 text-sm">(Opcional)</span>
                </p>
                <input
                    className="flex w-full rounded-lg text-white bg-[#483423]/50 focus:bg-[#483423]/80 focus:ring-2 focus:ring-primary h-14 placeholder:text-[#caab91]/70 p-4 text-base transition-all outline-none border-none"
                    placeholder="Ingresa tu número de teléfono"
                    type="tel"
                />
                </label>
            </div>

            {/* Submit button */}
            <button
                className="flex w-full items-center justify-center rounded-lg h-14 px-4 bg-primary text-[#221911] text-base font-bold tracking-[0.015em] hover:bg-[#d95f11] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                type="submit"
            >
                <span className="truncate">Crear cuenta</span>
            </button>
            </form>

            <p className="mt-8 text-center text-sm text-[#caab91]">
            ¿Ya tienes una cuenta?{' '}
            <Link
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
                to="/login"
            >
                Iniciar sesión
            </Link>
            </p>
        </main>
        </div>
    )
    }

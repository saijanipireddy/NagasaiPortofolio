
function Card({ children, className }) {
    
    const isDark = localStorage.getItem('theme') === 'dark';

    return (
        <div className={` dark:bg-zinc-900 bg-zinc-50 dark:border-neutral-400/20 border-gray-300 rounded-3xl border transition-all duration-300 ease-in-out shadow-lg ${className} `}>
            {children}
        </div>
    )
}

export default Card;
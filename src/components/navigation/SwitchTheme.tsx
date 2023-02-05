import { ThemeContext, ThemeType } from "@/lib/context/ThemeContext"
import clsx from "clsx";
import { useContext } from "react"


export const SwitchTheme = (props: {setTheme : (mode: ThemeType) => void}) => {
    
    const theme = useContext(ThemeContext);


    const handleSwitchTheme = () => {
        theme === 'dark' ? props.setTheme('light') : props.setTheme('dark')

    }
    
    return (
        <div className="flex items-center fixed z-10 bottom-0 ml-5 mb-5 gap-2">
            <button type="button" aria-label="Set dark mode" className={clsx('uppercase', {'text-black/60': theme === 'light'}, {'text-white': theme === 'dark'})} onClick={handleSwitchTheme}> Dark </button>
            <span aria-hidden='true'>/</span>
            <button type='button' aria-label="Set light mode" className={clsx('uppercase', {'text-white/60': theme === 'dark'},{'text-black': theme ==='light'} )} onClick={handleSwitchTheme}> Light </button>
        </div>
    )
}
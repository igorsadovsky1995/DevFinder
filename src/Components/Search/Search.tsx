import styles from "./Search.module.scss"
import iconSearch from "./assets/icon-search.svg"
import { Button } from "../Button/Button"

interface ISearch{
    hasError: boolean,
    onSubmit: (text: string)=>void
}

type FormFields = {
    username: HTMLInputElement
}

export const Search = ({hasError, onSubmit}: ISearch)=>{

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>)=> {
        event.preventDefault();
        
        const text = event.currentTarget.username.value;

        if(text.trim()){
            onSubmit(text);
            event.currentTarget.reset();
        }
    }

    return(
        <form action="" onSubmit={handlerSubmit} autoComplete="off">
            <div className={styles.search}>
                <label htmlFor="search" className={styles.label}>
                    <img src={iconSearch} alt="" />
                </label>
                <input 
                    type="text" 
                    className={styles.textField}
                    id="search"
                    name="username"
                    placeholder="Search GitHub username ..."
                />
                {
                    hasError && (
                        <div className={styles.error}>
                            No result
                        </div>
                    )
                }
                <Button>
                    Search
                </Button>
            </div>
            
        </form>
    )
}
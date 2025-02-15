import styles from "./UserTitle.module.scss"
import { LocalGitHubUser } from "../../types"

interface IUserTitle extends Pick<LocalGitHubUser, 'name' | 'login' | 'created'>{

}

const localDate = new Intl.DateTimeFormat('en-GB',{
    day:'numeric',
    month: 'short',
    year: 'numeric'
});

export const UserTitle = ({name, login, created}: IUserTitle)=> {
    const joinedDate = created ? localDate.format(new Date(created)) : "Date not available";

    return (
        <div className={styles.userTitle}>
            <h2>
                {name ? name : 'Name missing'}
            </h2>
            <h3>
                {login}
            </h3>
            <span>
                {joinedDate}
            </span>
        </div>
    )
}
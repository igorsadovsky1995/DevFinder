import styles from "./UserCard.module.scss"
import { LocalGitHubUser } from "../../types"
import { UserStart } from "../UserStart/UserStart"
import { UserTitle } from "../UserTitle/UserTitle"

interface IUserCard extends LocalGitHubUser {}

export const UserCard = (props:IUserCard)=> {
    return(
        <div className={styles.userCard}>
            <img src={props.avatar} alt='avatar' className={styles.avatar}/>
            <UserTitle name={props.name} login={props.login} created={props.created} />
            <p className={`${styles.bio} ${props.bio ? '':styles.empty}`}>
                {props.bio || "No biography"}
            </p>
            <UserStart repos={props.repos} followers={props.followers} following={props.following} />
        </div>
    )
}
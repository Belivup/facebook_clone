import css from "./peofileBody.module.css";
import Profile_intro from "@/app/( RouteGroups )/[user]/_comp/_profile_comp/profile_intro";
import ProfilePhotos from "@/app/( RouteGroups )/[user]/_comp/_profile_comp/profile_photos";

export default function ProfileBody(){
	return(
		<div className={css.profile_body_grid}>
			
			<div className={css.profile_intro}>
				<Profile_intro/>
				<Profile_intro/>
			</div>
			
			
			<div className={css.profile_content}>
				Content
			</div>
		</div>
	)
}
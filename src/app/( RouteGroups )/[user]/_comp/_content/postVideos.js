

export default function PostContent(){
	return(
		<div className={css.post_container}>
			<div className={css.post_flex}>
				
				<div className={css.post_form}>
					<Image src={profile_pic} alt="Profile Picture" />
					<div className="info">
					
					</div>
					
				</div>
				
				<span>Hello World</span>
				
				<span>Video</span>
			</div>
		</div>
	)
}
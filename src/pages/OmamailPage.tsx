function OmamailPage() {
	return (
		<main className="information-page">
			<article className="information-content">
				<header className="information-header">
					<h1 className="information-title">Omamail OAuth Integration</h1>

					<p className="information-meta">
						Private Google OAuth integration operated by Alexander Kallin.
					</p>
				</header>

				<h2 className="information-section-heading">About this integration</h2>

				<p className="information-copy">
					This page describes the private Google OAuth integration used by Alexander Kallin with the
					Omamail email client.
				</p>

				<p className="information-copy">
					The integration allows explicitly authorized Google accounts to be accessed by Omamail for
					email and related functionality.
				</p>

				<h2 className="information-section-heading">Google account access</h2>

				<p className="information-copy">
					Access is granted only after the Google account owner explicitly authorizes the
					application through Google's OAuth consent flow.
				</p>

				<p className="information-copy">
					The integration may access Gmail and related Google services only for functionality
					requested and authorized by the user.
				</p>

				<h2 className="information-section-heading">Privacy</h2>

				<p className="information-copy">
					Details about how Google user data is accessed, used, stored, and shared are available in
					the privacy policy.
				</p>

				<p className="information-copy">
					<a className="information-inline-link" href="/privacy">
						View Privacy Policy
					</a>
				</p>

				<a className="information-return-link" href="/">
					Return to alexanderkallin.com
				</a>
			</article>
		</main>
	);
}

export default OmamailPage;

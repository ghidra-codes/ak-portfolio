function PrivacyPage() {
	return (
		<main className="privacy-page">
			<article className="privacy-content">
				<header className="privacy-header">
					<h1 className="privacy-title">Privacy Policy</h1>

					<p className="privacy-updated">Last updated: September 18, 2026</p>
				</header>

				<p className="privacy-copy">
					This privacy policy applies to applications and services operated by Alexander Kallin that
					may use third-party authentication or API services, including Google OAuth.
				</p>

				<h2 className="privacy-section-heading">Google user data</h2>

				<p className="privacy-copy">
					When a Google account is connected to an application or service, only the Google user data
					required to provide the requested functionality is accessed.
				</p>

				<p className="privacy-copy">
					Google user data is used only to provide and operate the functionality explicitly
					authorized by the user. It is not used for advertising, profiling, or unrelated purposes.
				</p>

				<h2 className="privacy-section-heading">Data sharing</h2>

				<p className="privacy-copy">
					Google user data is not sold. It is not shared with third parties except where sharing is
					necessary to provide functionality explicitly requested by the user or where required by
					law.
				</p>

				<h2 className="privacy-section-heading">Authentication and storage</h2>

				<p className="privacy-copy">
					OAuth credentials, authentication tokens, and related account information are used only to
					authenticate authorized accounts and enable the features the user has chosen to use.
				</p>

				<p className="privacy-copy">
					Such data is retained only for as long as necessary to operate the authorized service and
					is not used for unrelated purposes.
				</p>

				<h2 className="privacy-section-heading">User control</h2>

				<p className="privacy-copy">
					Users may revoke an application's access to their Google account at any time through their
					Google Account settings.
				</p>

				<h2 className="privacy-section-heading">Changes to this policy</h2>

				<p className="privacy-copy">
					This policy may be updated if the way these applications or services access or use data
					changes. The latest version will always be available on this page.
				</p>

				<h2 className="privacy-section-heading">Contact</h2>

				<p className="privacy-copy">
					For questions about this privacy policy, contact Alexander Kallin using the contact
					information available at{" "}
					<a className="privacy-inline-link" href="https://alexanderkallin.com">
						alexanderkallin.com
					</a>
					.
				</p>

				<a className="privacy-return-link" href="/">
					Return to alexanderkallin.com
				</a>
			</article>
		</main>
	);
}

export default PrivacyPage;

import React from "react"

import CloudflareLogo from "./cloudflare-logo"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsMobileHeader = () => (
  <div className="DocsMobileHeader">
    <a className="DocsMobileHeader--cloudflare-logo-link Link Link-without-underline" href="https://raposas.net/">
      <DocsNavLogoLockup
        small={true}
        logo={<Img src='https://raw.githubusercontent.com/neelygenet/raposas/main/images/logo.png'/>}
        text={(
          <>
            <span data-text="Raposas">Raposas</span>
            <span>&nbsp;</span>
            <span data-text="Docs">Docs</span>
          </>
        )}
      />
    </a>
  </div>
)

export default DocsMobileHeader

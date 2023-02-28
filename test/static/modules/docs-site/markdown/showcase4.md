# SC Host - Decentralized hosting of Project DApp or services

As an evolution of usage scenario 3, it is possible for projects to have the entire DApp hosted on the IJS Secure Compute MainNet, including all aspects of UI/UX code.   

A full DApp technology stack typically includes:

- Deployed smart contracts
- Off-chain backend services
- Web UI and client-initiated events

[comment]: <> (With the SCcode framework, the off-chain backend services are powered by the smart contract SDK format as described in scenario 3.)

For the Web UI, there will be 2 options:

**Option 1 (Tier 2 Unsecured Hosting):**

All of the UI elements can be packaged into the SCcode framework and submitted to the network for Tier 2 SCRunners to host. 

**Option 2 (Tier 1 Using Secured Client):**

The DApp UI leverages a Secure Launcher component provided by IJS.  In this approach, the DApp will be split into different UI elements that are loaded dynamically during the runtime to provide features needed by the DApp.  The various UI elements can be built and audited as separate components.  When DApps are run, the secure launcher will check and verify the signature of the UI elements and only audited UI elements will be loaded to ensure that the DApp is behaving as it was intended and any fake sites or phishing attempts are thwarted.

Using this approach, projects would be able to ensure that they provide their users with a ‘trusted’ DApp experience.   This option also represents the ultimate objective of the IJS Secure Compute vision.

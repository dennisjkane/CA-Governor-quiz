export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  category: string;
  text: string;
  answers: Answer[];
}

export interface Candidate {
  id: string;
  name: string;
  description: string;
  tagline: string;
}

export const candidates: Record<string, Candidate> = {
  porter: {
    id: "porter",
    name: "Katie Porter",
    tagline: "The Consumer Advocate",
    description: "Aligns with Porter's 'Whiteboard' style of progressivism. Known for her total ban on corporate PAC/lobbyist money, 'CalCare' (Single-Payer) advocacy, and elimination of income tax for those earning under $100,000."
  },
  steyer: {
    id: "steyer",
    name: "Tom Steyer",
    tagline: "The Independent Reformer",
    description: "Aligns with Steyer's outsider reform platform. Backed by the Sierra Club and CTA, he focuses on breaking utility monopolies, aggressively prosecuting civil rights violations by ICE, and implementing 'Democracy Dollars'."
  },
  becerra: {
    id: "becerra",
    name: "Xavier Becerra",
    tagline: "The Institutional Defender",
    description: "Aligns with Becerra's 'Health Care Governor' platform. Emphasizes legal experience as AG and HHS Secretary to protect state laws and sanctuary status while incrementally building a universal health system."
  },
  hilton: {
    id: "hilton",
    name: "Steve Hilton",
    tagline: "The 'Califordable' Populist",
    description: "Aligns with Hilton's conservative disruption platform. Endorsed by Donald Trump, his 'Califordable' agenda focuses on $3 gas, ending sanctuary laws, and stripping regulatory power from climate agencies."
  },
  bianco: {
    id: "bianco",
    name: "Chad Bianco",
    tagline: "The Law & Order Sheriff",
    description: "Aligns with Bianco's enforcement-first model. A career Sheriff who advocates for collaborating with ICE to deport immigrant offenders, repealing Prop 47, and defunding Planned Parenthood."
  }
};

export const questions: Question[] = [
  {
    id: "healthcare",
    category: "Healthcare",
    text: "Which approach to healthcare delivery and access do you support?",
    answers: [
      { id: "porter", text: "Pass 'CalCare' (Single-Payer) to eliminate private insurance premiums and ensure every resident has high-quality care regardless of income or employment." },
      { id: "steyer", text: "Transition California to a universal single-payer system by using a Governor's independence from special interests to bypass the insurance lobby." },
      { id: "becerra", text: "Act as a 'Health Care Governor' who uses state power to immediately freeze insurance rate hikes while building a state-run single-payer system." },
      { id: "hilton", text: "Maintain current systems but end full Medi-Cal coverage for undocumented immigrants, redirecting those billions to lower costs for legal residents." },
      { id: "bianco", text: "Stop all state funding for Planned Parenthood and define abortion as a non-healthcare procedure that should not be covered by taxpayers." }
    ]
  },
  {
    id: "immigration",
    category: "ICE & Immigration",
    text: "How should California interact with federal immigration authorities?",
    answers: [
      { id: "porter", text: "Work with federal partners to abolish ICE and ensure state infrastructure is never used as a staging ground for a 'horrific deportation agenda.'" },
      { id: "steyer", text: "Abolish ICE and create a specialized state unit to criminally prosecute and imprison ICE agents or leadership who engage in racial profiling." },
      { id: "becerra", text: "Defend the 'Sanctuary State' law (SB 54) and use the Governor’s power to sue the federal government over immigration overreach." },
      { id: "hilton", text: "End all sanctuary policies immediately and become a 'willing partner' with the federal government to fully enforce immigration laws." },
      { id: "bianco", text: "End sanctuary status immediately and restore the right of local Sheriffs to hand over any undocumented person who commits a crime directly to ICE." }
    ]
  },
  {
    id: "ethics",
    category: "Campaign Finance & Ethics",
    text: "What is your policy for fixing the influence of money in politics?",
    answers: [
      { id: "porter", text: "Prohibit the Governor from accepting any money from corporate PACs and federal lobbyists, and advocate for a total ban on these contributions statewide." },
      { id: "steyer", text: "Implement a 'Democracy Dollars' system where the state provides vouchers to residents to donate, drowning out corporate spending with small-dollar matching." },
      { id: "becerra", text: "Maintain the current system of broad-based coalition fundraising from labor/community groups, while defending state donation limits in court." },
      { id: "hilton", text: "Implement stricter term limits for all state officials and make every dollar of special interest spending transparent to the public in real-time." },
      { id: "bianco", text: "Protect the rights of individual/organization donors to support candidates by challenging donation limit rules that favor the political establishment." }
    ]
  },
  {
    id: "energy",
    category: "Environment & Energy",
    text: "What is your priority for California's energy future?",
    answers: [
      { id: "porter", text: "Refuse all donations from Big Oil and make California the first state to achieve 100% clean energy output 365 days a year." },
      { id: "steyer", text: "Break up the monopoly of investor-owned utilities (like PG&E) to introduce local competition and lower household electric bills by at least 25%." },
      { id: "becerra", text: "Treat clean energy as a public investment but adjust climate goals to ensure they are 'achievable' and energy remains affordable for middle-class families." },
      { id: "hilton", text: "Return the Air Resources Board (CARB) to a mission of air quality only, stripping its power to set climate/gasoline policy to lower gas prices." },
      { id: "bianco", text: "Suspend the Environmental Quality Act (CEQA), lift all restrictions on oil drilling in the Central Valley, and expand nuclear/hydro energy." }
    ]
  },
  {
    id: "economy",
    category: "Taxes & The Economy",
    text: "How should the state address the wealth gap and the cost-of-living crisis?",
    answers: [
      { id: "porter", text: "Eliminate state income tax for everyone earning under $100,000 and fund free tuition/childcare by taxing corporations and billionaires." },
      { id: "steyer", text: "Implement a specific Wealth Tax on billionaires to fund direct monthly cash rebates (a 'Billionaire Rebate') to every California resident." },
      { id: "becerra", text: "Protect the current tax structure while using the Governor's office as a 'litigation machine' to sue grocery chains for price gouging." },
      { id: "hilton", text: "Implement a simple 7.5% flat tax on income over $100,000 and deliver $3.00 gas to make the state 'Califordable' for workers." },
      { id: "bianco", text: "Completely eliminate the state income tax and the gas tax to stop the 'over-taxation' that targets successful families and businesses." }
    ]
  },
  {
    id: "housing",
    category: "Housing & Homelessness",
    text: "How should the state address the housing and encampment crisis?",
    answers: [
      { id: "porter", text: "Focus on dense housing near transit and prevent homelessness through aggressive statewide eviction defense and universal rental assistance." },
      { id: "steyer", text: "Vow to build 1 million new homes in four years by scaling the factory-built (modular) housing industry to bypass traditional construction delays." },
      { id: "becerra", text: "Declare a Housing State of Emergency on day one to force cities to approve or deny building permits within a strict 90-day window." },
      { id: "hilton", text: "Encourage the construction of new suburbs (greenfield development) and eliminate the ability of private groups to use environmental laws to block housing." },
      { id: "bianco", text: "Sweep all encampments and mandate forced treatment for the unhoused suffering from addiction; treat it as a drug issue, not a housing issue." }
    ]
  },
  {
    id: "safety",
    category: "Public Safety",
    text: "Which criminal justice approach do you prefer?",
    answers: [
      { id: "porter", text: "Shift public safety funding away from incarceration and toward trained social service providers for mental health and homelessness incidents." },
      { id: "steyer", text: "Focus on 'clearing the streets' by moving the unhoused into one-room interim housing with a 'key and a door' rather than traditional shelters." },
      { id: "becerra", text: "Use the state's legal power to sue local jurisdictions that violate civil rights while maintaining current state-level criminal justice reforms." },
      { id: "hilton", text: "End the 'culture of lawlessness' by repealing Proposition 47 to stiffen sentences for theft and drug offenses." },
      { id: "bianco", text: "As a 'Law and Order' leader, roll back all progressive sentencing reforms and prioritize the rights of victims and police." }
    ]
  },
  {
    id: "ai",
    category: "AI & Technology",
    text: "What is your approach to Artificial Intelligence (AI) regulation regarding workers, the military, and the environment?",
    answers: [
      { id: "porter", text: "Mandate algorithmic transparency to protect workers from 'bossware' and prohibit AI applications that automate mass surveillance or lethal military systems." },
      { id: "steyer", text: "Enforce strict energy-efficiency standards for AI data centers and tax AI-driven corporate profits to fund job retraining for displaced workers." },
      { id: "becerra", text: "Draft a 'Digital Bill of Rights' to prevent AI bias in healthcare/hiring while maintaining a stable legal environment for tech innovation." },
      { id: "hilton", text: "Deregulate AI to ensure California wins the global race, and use AI to replace thousands of state middle-manager jobs to cut government waste." },
      { id: "bianco", text: "Prioritize AI investment for law enforcement, using predictive tools to stop crime and biometric AI to secure borders and deport offenders." }
    ]
  },
  {
    id: "endorsements",
    category: "Endorsements & Coalitions",
    text: "Which group of endorsements and coalition support do you trust to guide California?",
    answers: [
      { id: "porter", text: "Endorsed by Senator Elizabeth Warren, EMILY's List, and the United Auto Workers (UAW); a coalition focused on consumer rights." },
      { id: "steyer", text: "Endorsed by the Sierra Club, CTA (Teachers), CNA (Nurses), Ro Khanna, and Our Revolution (Bernie Sanders' grassroots org)." },
      { id: "becerra", text: "Endorsed by Speaker Robert Rivas, SEIU California, and Planned Parenthood Affiliates of CA; the traditional Democratic establishment." },
      { id: "hilton", text: "Endorsed by Donald Trump, Congressman Tom McClintock, and the Howard Jarvis Taxpayers Association; a populist conservative movement." },
      { id: "bianco", text: "Endorsed by PORAC (Peace Officers Research Association of CA) and over 35 County Sheriffs; a coalition focused on law enforcement." }
    ]
  }
];

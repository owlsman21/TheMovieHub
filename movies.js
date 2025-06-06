const movies = [
    // --- Existing Movies (Ok.ru and YouTube) ---
    {
        title: "Ulzanas Raid (1972)",
        description: "The story revolves around Scout McIntosh and an U.S. Cavalry Lieutenant DeBuin, who set out to catch a group of Apache renegades who are being led by chieftain, Ulzana.",
        embedId: "6410503522969",
        source: "okru",
        genres: ["Western"],
    },
    {
        title: "She wore a yellow ribbon",
        description: "Captain Nathan Brittles heads his last assignment before retirement to stop a Native American attack. But the job gets challenging when his superior instructs him to escort two women to safety.",
        embedId: "8921446943385",
        source: "okru",
        genres: ["Western"],
    },
    {
        title: "They Died with Their Boots On (1941)",
        description: "A movie which showcases the famous battle of Little Big Horn and the life of General Custer from the time he enters West Point military academy, the American Civil War and his death at Big Horn.",
        embedId: "8921449302681",
        source: "okru",
        genres: ["Western"],
    },
    {
        title: "Dog.Soldiers.2002.720p.BluRay",
        description: "During a routine nighttime training mission in the Scottish Highlands, a small squad of British soldiers expected to rendezvous with a special ops unit instead find a bloody massacre with a sole survivor. The savage attackers of the special ops team return, and the men are rescued by Megan (Emma Cleasby), a zoologist who identifies what hunts them as werewolves. Without transport or communications, the group is forced to retreat to a farmhouse to wait for the full moon to disappear at dawn.",
        embedId: "1632050940569",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "THE SHATTERING_ HD 2020",
        description: "Donovan lures several friends into the woods to meet a healer with his cancer-stricken girlfriend. Lucy. As they are hunted by creatures and commandos, the friends realize they were set up to pay for Lucy's cure.",
        embedId: "2054985288345",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "Downrange+2018.HD",
        description: "Stranded survivors of a roadside ambush must find a way to escape a deadly sniper.",
        embedId: "1281124600473",
        source: "okru",
        genres: ["Horror", "Action"],
    },
    {
        title: "mary had a little-lamb-2023",
        description: "A horror film reimagining the classic nursery rhyme with a terrifying twist.",
        embedId: "8916412664473",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "The-horse-soldiers-1959",
        description: "During the Civil War, a Union cavalry unit is sent on a perilous mission behind Confederate lines.",
        embedId: "8921430297241",
        source: "okru",
        genres: ["Western"],
    },
    {
        title: "Training Day",
        description: "A rookie detective is pushed to his limits by a corrupt narcotics officer during a single, intense day.",
        embedId: "6458634209830",
        source: "okru",
        genres: [""],
    },
    {
        title: "wrong_turn",
        description: "A group of friends gets lost in the woods and becomes prey for a family of cannibalistic mutants.",
        embedId: "3630121945753",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "Wrong Turn2:Dead_End",
        description: "Contestants on a reality TV show fight for survival against a family of inbred cannibals.",
        embedId: "3630122273433",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "wrong turn 3 left for dead",
        description: "Escaped convicts and a group of college students find themselves hunted by cannibals in the wilderness.",
        embedId: "3630123649689",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "Wrong Turn 4: Bloody Beginnings",
        description: "A group of college students gets stranded in a snowstorm and takes refuge in an abandoned asylum, where they are hunted by mutants.",
        embedId: "3630125222553",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "Wrong Turn 5:Bloodlines",
        description: "A Halloween music festival takes a terrifying turn when a group of friends becomes targets for a family of cannibals.",
        embedId: "3630125812377",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "Wrong Turn 6: Last Resort",
        description: "A young man inherits a forgotten resort, only to discover it's home to a sinister family of cannibals.",
        embedId: "3630126271129",
        source: "okru",
        genres: ["Horror"],
    },

    // --- Movies from Page 2.html ---
    {
        title: "Nightbreed.1990.1080p.BluRay",
        description: "A young man discovers a hidden world of monsters and becomes their unlikely leader.",
        embedId: "2575196097177",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "The Sweeney (2012) 720p",
        description: "A hard-hitting police drama following a flying squad of detectives in London.",
        embedId: "2480859581081",
        source: "okru",
        genres: [""],
    },
    {
        title: "Wolf Creek Horror 720p HD",
        description: "Three backpackers stranded in the Australian outback fall prey to a sadistic killer.",
        embedId: "2054941575833",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "Wolf Creek 2 (2013)",
        description: "A sequel continuing the terrifying journey of the infamous Australian serial killer, Mick Taylor.",
        embedId: "3290426641064",
        source: "okru",
        genres: ["Horror"],
    },
    {
        title: "The.Girl.Next.Door.2007.720p.BluRay",
        description: "Based on a disturbing true story, a teenage girl is subjected to horrific abuse by her aunt and cousins.",
        embedId: "2207886740121",
        genres: [""],
        source: "okru"
    },
     // --- Movies from Page 2.html ---
    {
        title: "Dragon Soldiers",
        description: "A group of soldiers must fight mythical creatures in a fantastical setting.",
        embedId: "1630024567449",
        genres: ["Sci-Fi"],
        source: "okru"
    },
    {
        title: "The punisher 1989",
        description: "An ex-cop wages a one-man war against the criminal underworld after his family is murdered.",
        embedId: "2099299682969",
        genres: [""],
        source: "okru"
    },
    {
        title: "Master and Commander: The Far Side of the World",
        description: "During the Napoleonic Wars, a daring British captain pursues a formidable French warship.",
        embedId: "1004226742937",
        genres: ["War","Action"],
        source: "okru"
    },
    {
        title: "I am wrath",
        description: "A man seeks revenge for his wife's murder when corrupt police fail to catch the killers.",
        embedId: "1060182231705",
        genres: ["Action"],
        source: "okru"
    },
    {
        title: "Brawl.in.Cell.Block.99.2017.1080",
        description: "A former boxer and drug runner ends up in a brutal prison, forced to make impossible choices.",
        embedId: "1200399846041",
        genres: ["Drama","Action"],
        source: "okru"
    },
    {
        title: "True romance",
        description: "A comic book nerd and a call girl fall in love and go on the run from the mob.",
        embedId: "1189170907801",
        genres: ["Drama","Action"],
        source: "okru"
    },
    {
        title: "Police Story",
        description: "A Hong Kong detective is framed for murder and must clear his name while fighting criminals.",
        embedId: "1189169334937",
        genres: ["Action"],
        source: "okru"
    },
    {
        title: "Heat full movie",
        description: "A professional thief and an obsessive detective engage in a high-stakes game of cat and mouse.",
        embedId: "1189169138329",
        genres: ["Action"],
        source: "okru"
    },
    {
        title: "The.Guvnors.2014.720p.BluRay",
        description: "A retired gang leader is drawn back into London's violent underworld.",
        embedId: "1123590015641",
        genres: ["Action","Drama"],
        source: "okru"
    },
    {
        title: "north vs south",
        description: "A conflict between two opposing factions in a historical or fictional setting.",
        embedId: "1157638130329",
        genres: ["Drama","Action"],
        source: "okru"
    },
    {
        title: "The.Horse.Soldiers.1959",
        description: "During the Civil War, a Union cavalry unit is sent on a perilous mission behind Confederate lines.",
        embedId: "8921430297241",
        genres: ["Western"],
        source: "okru"
    },
    {
        title: "Training Day",
        description: "A rookie detective is pushed to his limits by a corrupt narcotics officer during a single, intense day.",
        embedId: "6458634209830",
        genres: ["Drama","Action"],
        source: "okru"
    },
    {
        title: "Kill Another Day 2016",
        description: "A point-of-view horror film about a young man surviving a zombie apocalypse. Directed by Zachary Ramelan, it was released in Canada on March 31, 2016,",
        embedId: "6410479798937",
        genres: ["Action"],
        source: "okru"
    },
    {
        title: "Frgiles 2005 BluRay 720p",
        description: "At her new job in a rundown children's hospital, a nurse desperately tries to keep her patients safe from a plague of random, mysterious attacks.",
        embedId: "2575196097177",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Darkness Falls 2020",
        description: "After his wife's suicide, Detective Jeff Anderson becomes convinced that she has been murdered. Obsessed with his investigation, he finds out that his wife was the victim of a team of father-and-son serial killers and sets out to stop them.",
        embedId: "2218518055577",
        genres: ["Drama","Action"],
        source: "okru"
    },
    {
        title: "The Babysitter 2017",
        description: "When Cole stays up past his bedtime, he discovers that his hot baby sitter belongs to a satanic cult",
        embedId: "1012486376089",
        genres: ["Horror"],
        source: "okru"
    },
   
    {
        title: "Colditz 2005",
        description: "While WWII Allied officer Jack Rose is held prisoner in Germany's notorious Colditz Castle, he recruits a band of fellow escape artists in the ultimate break-out only to discover that the greatest betrayal awaits him on safe ground.",
        embedId: "6YHTnOquIBY",
        genres: ["Drama","war"],
        source: "youtube"
    },
    {
        title: "Please Sir",
        description: "Fun with the Fenn st gang",    
        embedId: "v6rgy5d/?pub=792qb",
        genres: ["Comedy"],
        source: "rumble"
    },
    {
        title: "Cass",
        description: " Cass is a 2008 British crime drama film. It stars Nonso Anozie as Cass Pennant and is directed by Jon S. Baird. Cass is based on the true story of the life of Cass Pennant, adapted from his book.",
        embedId: "_uurzT-1Sck",
        genres: ["Drama"],
        source: "youtube"
    },
    {
        title: "Rise of the Footsoldier 2021",
        description: " Rise of the Footsoldier is a British gangster film franchise written and directed by Julian Gilbey, Will Gilbey, Ricci Harnett, Zackary Adler, Andrew Loveday and Nick Nevern, ",
        embedId: "qLFepx1SF80",
        genres: ["Drama"],
        source: "youtube"

    },
     // --- Movies from Page 3.html ---
    {
        title: "The Hot Potato Movie 2011",
        description: " The Hot Potato is a 2012 British comedy crime thriller film. It was directed and written by Tim Lewiston and stars Ray Winstone, Colm Meaney and Jack Huston in the lead roles.",
        embedId: "O85tflN5Krg",
        genres: ["Drama","Comedy"],
        source: "youtube"
    },
    {
        title: "Open Graves 2009",
        description: " A group of surfers discover an old board game which claims a life every time it is played.",
        embedId: "9519433386534",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Ouija: A New Beginning (2025) ",
        description: "Molly Price is a woman on the run, but when her oldest daughter finds a Ouija board and attempts to communicate with her deceased father, she invites the spirit of an ancient witch into her soul and puts the entire family at risk.",
        embedId: "9517571574310",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Abduct (2025) ",
        description: " A woman's peaceful mountain getaway takes a bizarre turn when her boyfriend disappears, and a random naked man shows up claiming to be him.",
        embedId: "9517374966310",
        genres: ["Drama"],
        source: "okru"
    },
    {
        title: "I Was Honey Boo Boo (2025) ",
        description: " Alana Thompson, famously known as honey boo boo reveals her story of rising to fame and the secrets behind the cameras.",
        embedId: "9517224757798",
        genres: ["Drama"],
        source: "okru"
    },
    {
        title: "The Surrender 2015 ",
        description: " When the family patriarch dies, a grieving mother and daughter risk their lives to perform a brutal resurrection ritual and bring him back from the dead.",
        embedId: "9516826429990",
        genres: ["Horror"],
        source: "okru"
    },

    {
        title: "Final Destination: Bloodlines 2025 ",
        description: " Plagued by a recurring violent nightmare, a college student returns home to find the one person who can break the cycle and save her family from the horrific fate that inevitably awaits them.",
        embedId: "9514534111782",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Antisocial 2 2015 ",
        description: "Years after having her newborn child stolen from her, Sam searches a world infested with infected users from the Social Redroom website. After befriending a young girl named Bean, Sam is captured and locked in a facility dedicated to finding a cure for the Redroom Virus",
        embedId: "9506057947686",
        genres: ["Drama"],
        source: "okru"
    },
    {
        title: "Antisocial 2013 ",
        description: " Five university friends gather at a house party to ring in the New Year. Unbeknownst to them, an epidemic has erupted outside, causing outbreaks around the world.",
        embedId: "9500551088678",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Crossfire 2022",
        description: "After a shooting, Jo's family vacations turns into turmoil.",
        embedId: "pF_YIqju9gw",
        genres: ["Action"],
        source: "youtube"
    },
    {
        title: "Blood Predator",
        description: " A handful of people wind up stranded in a desolate snowy mountain area in the wake of an airplane crash. They seek refuge in an old abandoned cabin. The group find themselves being terrorized by a lethal predatory extraterrestrial beast residing in the basement of the cabin.",
        embedId: "wN6OhOR43a4",
        genres: ["Horror"],
        source: "youtube"
    },
    {
        title: "Archangel 2005",
        description: " A British college professor, working in Russia, investigates certain mysteries surrounding the life and death of Joseph Stalin.",
        embedId: "zsZYaPNWcl4",
        genres: ["Drama"],
        source: "youtube"
    },
    {
        title: "Assassin 2015",
        description: " Jamie is a contract killer tasked with eliminating a crooked official, but complications arise when he falls for the daughter of his target.",
        embedId: "jTR6N8Ip6DM",
        genres: ["Action"],
        source: "youtube"
    },
    {
        title: "Air Force One Is Down",
        description: " Alistair Maclean's highly charged novel is brought to life for a contemporary audience in this tense, international thriller.",
        embedId: "WzrYrcQPJqE",
        genres: ["Action","Thriller"],
        source: "youtube"
    },
    {
        title: "Union 2019",
        description: "A woman disguises herself as her dead brother, Henry, in order to survive in the Confederate ranks during the Civil War. He marries a widow to rescue her from an arranged marriage. They keep each others secrets and find true love.",
        embedId: "1367854418585",
        genres: ["Western"],
        source: "okru"
    },
    {
        title: "Decoys 2004",
        description: " Luke and Roger are just another couple of college guys trying to lose their virginity. But when Luke sees something unusual, he begins to suspect that the girls on campus aren't exactly human.",
        embedId: "rWS9TaHh0Jo",
        genres: ["Horror","Comedy"],
        source: "youtube"
    },
    {
        title: "Mercury Plains 2004",
        description: " A troubled man runs away to Mexico and is recruited to join a paramilitary group of teens fighting the drug cartels. He proves himself to the group, but questions their motive.",
        embedId: "qwkiu0sk-9k",
        genres: ["Action","Drama"],
        source: "youtube"
    },
    {
        title: "Wolf Town 2011 ",
        description: " Kyle, a shy college student finds himself and three of his friends trapped in an old western ghost town by a pack of ferocious wolves and has to overcome his personal fears to confront the wolves and lead his friends to safety.",
        embedId: "978941381273",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Shadowland 2008 ",
        description: "A taut reinvention of vampire lore, Shadowland opens in modern day North America, where construction workers uncover an old stone cross and what appears to be a wooden stake. They remove the stake from the ground, allowing Laura (Caitlin McIntosh), a slumbering vampire, to revive and rise from the earth",
        embedId: "979663850137",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "The Surrender 2015 ",
        description: " When the family patriarch dies, a grieving mother and daughter risk their lives to perform a brutal resurrection ritual and bring him back from the dead.",
        embedId: "9516826429990",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Aliens.vs.Predator.Requiem.2007 ",
        description: " Residents (Steven Pasquale, Reiko Aylesworth, John Ortiz) of Gunnison, Colorado, are caught up in the crossfire when two deadly extraterrestrial species bring their longstanding conflict to Earth. On the one side, nearly indestructible Aliens; on the other, a lone Predator whose mission is to wipe out all traces of the Alien infestation from Earth, no matter who gets in the way.",
        embedId: "1005714934425",
        genres: ["Horror", "Sci-Fi"],
        source: "okru"
    },
    {
        title: "The Devil's Rock ",
        description: " Set in the Channel Islands on the eve of D Day, two Kiwi commandos, sent to destroy German gun emplacements to distract Hitler's forces away from Normandy, discover a Nazi occult plot to unleash demonic forces to win the war",
        embedId: "979809208985",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "The Last of the Mohicans (1992) ",
        description: "The last members of a dying Native American tribe, the Mohicans -- Uncas (Eric Schweig), his father Chingachgook (Russell Means), and his adopted half-white brother Hawkeye (Daniel Day-Lewis) -- live in peace alongside British colonists. But when the daughters (Madeleine Stowe, Jodhi May) of a British colonel are kidnapped by a traitorous scout, Hawkeye and Uncas must rescue them in the crossfire of a gruesome military conflict of which they wanted no part: the French and Indian War.",
        embedId: "967004064409",
        genres: ["Western"],
        source: "okru"
    },
    {
        title: "Mohawk 2018 ",
        description: "Late in the War of 1812, a young Mohawk woman and her two lovers battle a squad of American soldiers hell-bent on revenge.",
        embedId: "1351353633433",
        genres: ["Western"],
        source: "okru"
    },
    {
        title: "Young Guns 2 ",
        description: "En route to Mexico from the United States, Billy the Kid (Emilio Estevez) and his associates are pursued by federal agents hell-bent on bringing them to justice. But when Billy, Doc (Kiefer Sutherland) and Chavez (Lou Diamond Phillips) prove too difficult to track down, the frustrated authorities enlist an old friend of theirs, reformed outlaw Pat Garrett (William Petersen), to take down the elusive gunslinger. But Billy has a head start, and his crew of outlaws is growing by the minute.",
        embedId: "1012291275417",
        genres: ["Western"],
        source: "okru"
    },
     {
        title: "Wyatt Earp.1994.HD ",
        description: " The epic biography of western lawman Wyatt Earp, who at an early age, is taught that nothing matters more than family and the law. He becomes a respected sheriff in Dodge City and Tombstone. Joined by his brothers and Doc Holliday, Earp wages war on the dreaded Clanton and McLaury gangs.",
        embedId: "1010676468377",
        genres: ["Western"],
        source: "okru"
    },
     {
        title: "The.Salvation.2014.720p.BluRay ",
        description: " After shooting the man who murdered his wife, a Danish settler (Mads Mikkelsen) incurs the wrath of the man's brother (Jeffrey Dean Morgan), a ruthless land baron who rules their frontier town.",
        embedId: "1010670897817",
        genres: ["Western"],
        source: "okru"
    },
     {
        title: "The.Burrowers.2008 ",
        description: " A rescue party comes face to face with underground creatures attacking a town.",
        embedId: "1010671487641",
        genres: ["Horror", "Western"],
        source: "okru"
    },
     {
        title: "The Revenant 2015 ",
        description: "While exploring the uncharted wilderness in 1823, frontiersman Hugh Glass (Leonardo DiCaprio) sustains life-threatening injuries from a brutal bear attack. When a member (Tom Hardy) of his hunting team kills his young son (Forrest Goodluck) and leaves him for dead, Glass must utilize his survival skills to find a way back to civilization. Grief-stricken and fueled by vengeance, the legendary fur trapper treks through the snowy terrain to track down the man who betrayed him.",
        embedId: "1009119464089",
        genres: ["Western"],
        source: "okru"
    },
     {
        title: "Hostiles (2017)",
        description: "In 1892, legendary Army Capt. Joseph Blocker reluctantly agrees to escort a dying Cheyenne war chief and his family back to their tribal land. Embarking on a harrowing and perilous journey from Fort Berringer, N.M., to the grasslands of Montana, they soon encounter a young widow whose family was killed on the plains. The travelers must now band together to survive a punishing landscape that's crawling with hostile Comanches and vicious outliers.",
        embedId: "1009119398553",
        genres: ["Western"],
        source: "okru"
    },
     {
        title: "Tombstone (1993) ",
        description: "Wyatt Earp (Kurt Russell) and his brothers, Morgan (Bill Paxton) and Virgil (Sam Elliott), have left their gunslinger ways behind them to settle down and start a business in the town of Tombstone, Ariz. While they aren't looking to find trouble, trouble soon finds them when they become targets of the ruthless Cowboy gang. Now, together with Wyatt's best friend, Doc Holliday (Val Kilmer), the brothers pick up their guns once more to restore order to a lawless land.",
        embedId: "967267846809",
        genres: ["Western"],
        source: "okru"
    },
     {
        title: "Young Guns (1988) ",
        description: "John Tunstall (Terence Stamp), a distinguished British gentleman, employs downtrodden youths to tend his herd on the New Mexican frontier. When Tunstall is gunned down by the crooked Lawrence G. Murphy (Jack Palance), a ragtag group of cow hands -- including Doc Scurlock (Kiefer Sutherland), Richard Brewer (Charlie Sheen) and young William billy the kid Bonney (Emilio Estevez) -- ride forth in search of bloody vengeance for the death of their beloved mentor.",
        embedId: "970239642265",
        genres: ["Western"],
        source: "okru"
    },
     {
        title: "In the Tall Grass (2019) ",
        description: " After hearing a young boy's cry for help, a sister and brother venture into a vast field of tall grass in Kansas but soon discover there may be no way out...and that something evil lurks within.",
        embedId: "1590932015654",
        genres: ["Horror","Sci-Fi"],
        source: "okru"
    },
     {
        title: "The.Inbetweeners.Movie.2011 ",
        description: "Now that their final year of school is over, friends Will, Simon, Neil and Jay are off to Crete for a holiday. Hoping to get as much sun, sea and sex as possible, the boys quickly find more trouble than they had bargained for.",
        embedId: "1900462607001",
        genres: ["Comedy"],
        source: "okru"
    },
     {
        title: "The.Inbetweeners.2.2014.1080p.BluRay ",
        description: "Jay, Neil, Simon and Will reunite in Australia after the gang finds out that Jay is indulging in a life of hedonism and promiscuity as a star DJ in Sydney. However, when they get there, they discover that Jay has vastly overstated his success.",
        embedId: "1900467325593",
        genres: ["Comedy"],
        source: "okru"
    },
     {
        title: "0 by mouth ",
        description: "In a working-class London neighborhood, a highly dysfunctional family struggles to survive. The widowed Janet (Laila Morse), a former factory worker, has welcomed relatives into her home. In addition to her elderly mother, Kath (Edna Doré), and her son, Billy (Charlie Creed-Miles), Janet lives with her daughter, Valerie (Kathy Burke), and Valerie's abusive, alcoholic husband, Ray (Ray Winstone). Together they attempt to work out their differences, but drugs, booze and violence get in the way.",
        embedId: "970686663321",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "One_Flew_Over The Cuckoos Nest (1975) 720p BluRay ",
        description: "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
        embedId: "1490043603609",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "SAFE HAVEN 2013 ",
        description: "A young woman with mysterious past land in Southport, North Carolina where her bond with a widower forces her to confront the dark secret that haunts her.",
        embedId: "977407052441",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "urge 2016 ",
        description: " An island getaway turns deadly when a mysterious nightclub owner (Pierce Brosnan) introduces a group of friends to a drug that can't be taken more than one time.",
        embedId: "1076555680409",
        genres: ["Drama","Sci-Fi"],
        source: "okru"
    },
       {
        title: "The Pilots Wife (2002)",
        description: " Kathryn is distraught at the news of her husband's death delivered by a stranger from the airline for whom he was a pilot. She starts however to uncover information which leads to her arrival in London for further investigation...and further devastation.",
        embedId: "1092629367449",
        genres: ["Drama"],
        source: "okru"
    },
       {
        title: "Stan and Ollie.2019.HD ",
        description: "Laurel and Hardy, the world's most famous comedy duo, attempt to reignite their film careers as they embark on what becomes their swan song - a gruelling theatre tour of post-war Britain.",
        embedId: "1198585678489",
        genres: ["Drama","Comedy"],
        source: "okru"
    },
       {
        title: "The Brown+Bunny 2003 ",
        description: "A motorcycle racer (Vincent Gallo) journeys cross country in search of women to take the place of the one true love (Chloë Sevigny) of his life.",
        embedId: "1232238086809",
        genres: ["Drama"],
        source: "okru"
    },
       {
        title: "The Guard of Auschwitz 2018.720p ",
        description: " Follows the events of the Holocaust through the eyes of an SS Soldier.",
        embedId: "1265936632473",
        genres: ["Drama"],
        source: "okru"
    },
       {
        title: "A Lonely Place to Die 2011",
        description: "While hiking and climbing in the Scottish Highlands, a group of five mountaineers discover a young Serbian girl buried in a small chamber. In the attempt to get the girl to safety, they become caught up in a terrifying game of cat and mouse with the kidnappers.",
        embedId: "968086391449",
        genres: ["Drama","Thriller"],
        source: "okru"
    },
     {
        title: "vendetta 2013",
        description: "Special ops interrogation officer Jimmy Vickers tracks down a gang who slaughtered his parents. With police closing in & his old unit on his trail, he has to to evade capture long enough to complete his gruesome crusade.",
        embedId: "6410477177497",
        genres: ["Action","Thriller"],
        source: "okru"
    },
     {
        title: "Deepwater (2005)",
        description: " Nat Banyon (Lucas Black), a drifter en route to Wyoming, rescues Herman Finch (Peter Coyote) at the scene of a car accident. Grateful for his assistance, Finch offers Nat a job and free room and board at his hotel. There, Nat meets Finch's beautiful wife, Iris (Mia Maestro), and learns that his new boss is the ringleader of a local crime syndicate. Fearful that he too will fall prey to Finch's criminal machinations, Nat hatches a plan to run off with Iris.",
        embedId: "1333519387289",
        genres: ["Drama","Thriller"],
        source: "okru"
    },
     {
        title: "Hamburger.Hill.1987 ",
        description: " A brutal and realistic war film focuses on the lives of a squad of 14 U.S. Army soldiers of B Company, 3rd Battalion, 187th Infanty Regiment, 101st Airborne Division during the brutal 10 day (May 11-20, 1969) battle for Hill 937 in the A Shau Valley of Vietnam as they try again and again to take the fortified hill held by the North Vietnamese, and the faults and casualties they take every time in which the battle was later dubbed Hamburger Hill because enemy fire was so fierce that the fusillade of bullets turned assaulting troops into shreded hamburger meat.",
        embedId: "1440487049881",
        genres: ["War"],
        source: "okru"
    },
     {
        title: "Threads 1983",
        description: " The effects of a nuclear holocaust on the working class city of Sheffield, England and the eventual long-term effects of nuclear war on civilization.",
        embedId: "6410542975641",
        genres: ["War","Drama"],
        source: "okru"
    },
     {
        title: "Mission of Honor",
        description: "The exploits of 303 Squadron RAF during the Battle of Britain. The squadron consisted of Polish pilots, many of whom were veterans of the air battles involved in Germany's invasion of Poland.",
        embedId: "1004758633113",
        genres: ["War"],
        source: "okru"
    },
     {
        title: "bravo two zero ",
        description: "British soldier Andy McNab (Sean Bean) leads a British Special Air Services patrol deployed during the Gulf War to take down Saddam Hussein's growing arsenal of Scud missiles. The fearless unit successfully inserts itself behind enemy lines, but inclement weather and loss of radio communication threatens to doom its mission. Captured and taken prisoner by the Iraqi army, the heroic soldiers of Bravo Two Zero must overcome the odds to escape almost certain torture or death.",
        embedId: "976455010969",
        genres: ["War"],
        source: "okru"
    },
     {
        title: "My Lai Four ",
        description: "The reenactment of the brutal massacre in Mi Lai a village in South Vietnam perpetrated by American Military forces on 16th of March 1968.",
        embedId: "1004028431001",
        genres: ["War"],
        source: "okru"
    },
     {
        title: "Lone Survivor ",
        description: "Marcus Luttrell and his team set out on a mission to capture or kill notorious Taliban leader Ahmad Shah, in late June 2005. Marcus and his team are left to fight for their lives in one of the most valiant efforts of modern warfare.",
        embedId: "1015881337497",
        genres: ["War"],
        source: "okru"
    },
     {
        title: "Alone.We.Fight.2018.1080p",
        description: "On a mission to stop an advancing German unit from breaking through the Allied line during WWII, a small -- but determined -- band of American soldiers ventures into dangerous enemy territory.",
        embedId: "1086013311641",
        genres: ["War"],
        source: "okru"
    },
     {
        title: "Act of valor 2012 ",
        description: "An elite team of Navy SEALs embark on a covert mission to recover a kidnapped CIA agent.",
        embedId: "1460879952537",
        genres: ["War","Action"],
        source: "okru"
    },
     {
        title: "The.Green.Berets.1968.720p.BluRay ",
        description: "Col. Mike Kirby picks two teams of crack Green Berets for a mission in South Vietnam. First off is to build and control a camp that is trying to be taken by the enemy the second mission is to kidnap a North Vietnamese General.",
        embedId: "1447574112921",
        genres: ["War"],
        source: "okru"
    },
     {
        title: "Black Hawk Down (2001) ",
        description: " Action/war drama based on the best-selling book detailing a near-disastrous mission in Somalia on October 3, 1993. On this date nearly 100 U.S. Army Rangers, commanded by Capt. Mike Steele, were dropped by helicopter deep into the capital city of Mogadishu to capture two top lieutenants of a Somali warlord. This led to a large and drawn-out firefight between the Army Ranges, US Special Forces, and hundreds of Somali gunmen; resulting in the destruction of two U.S. Black Hawk helicopters. The film focuses on the heroic efforts of various Rangers to get to the downed black hawks, centering on SSG Eversmann, leading the Ranger unit Chalk Four to the first black hawk crash site, Chief Warrant Officer Durant who was captured after being the only survivor of the second black hawk crash, as well as many others who were involved.",
        embedId: "1440484952729",
        genres: ["War"],
        source: "okru"
    },
     {
        title: "Green Street Hooligans 2 (2009) ",
        description: " After the brutal mass brawl fans of two football teams go to jail, where their feud raised to a new level of cruelty.",
        embedId: "10207745018482",
        genres: ["Drama","Crime"],
        source: "okru"
    },
     {
        title: "Green.Street.2005.720p ",
        description: "A wrongfully expelled Harvard undergrad moves to London, where he is introduced to the violent underworld of football hooliganism.",
        embedId: "10207743511154",
        genres: ["Drama","Crime"],
        source: "okru"
    },
     {
        title: "The Bayou 2025",
        description: " Vacation turns disaster when Houston grad, Kyle and her friends escape a plane crash in the desolate Louisiana everglades, only to discover there's something way more dangerous lurking in the shallows.",
        embedId: "10413556304498",
        genres: ["Thriller","Horror"],
        source: "okru"
    },
    
     {
        title: "Teeth 2007 ",
        description: "Still a stranger to her own body, a high school student discovers she has a physical advantage when she becomes the object of male violence.",
        embedId: "9490268686886",
        genres: ["Horror"],
        source: "okru"
    },

     {
        title: "Redhead 2023 ",
        description: " Cannibalism and depravity drive Autumn Blacksmith, now widowed, to engage in a relentless revenge binge. Will she kill every man around her?",
        embedId: "9461777959462",
        genres: ["Horror"],
        source: "okru"
    },

     {
        title: "Drop 2025 ",
        description: " A widowed mother's first date in years takes a terrifying turn when she's bombarded with anonymous threatening messages on her phone during their upscale dinner, leaving her questioning if her charming date is behind the harassment.",
        embedId: "9453163252262",
        genres: ["Drama","Thriller"],
        source: "okru"
    },

     {
        title: "Bone Face (2025) ",
        description: "When a masked killer slaughters several campers in a small town, a sheriff and a deputy track the murderer to a local diner where, using their investigative skills, they must discover which person in the diner is the actual killer.",
        embedId: "9235304614438",
        genres: ["Horror"],
        source: "okru"
    },

     {
        title: "Piglet (2025) ",
        description: " On Kate's 21st birthday camping trip, her friends encounter Piglet, a monstrous human-pig hybrid who brutally murders one of them. They uncover Piglet's origins and Kate must confront her past to survive the relentless killer.",
        embedId: "9190687115814",
        genres: ["Horror"],
        source: "okru"
    },

     {
        title: "Terrifier 3",
        description: "Art the Clown is set to unleash chaos on the unsuspecting residents of Miles County as they peacefully drift off to sleep on Christmas Eve.",
        embedId: "7979902568998",
        genres: ["Horror"],
        source: "okru"
    },

     {
        title: "Near Dark (1987)",
        description: " A small-town farmer's son reluctantly joins a traveling group of vampires after he is bitten by a beautiful drifter.",
        embedId: "7723308616230",
        genres: ["Horror"],
        source: "okru"
    },

     {
        title: "Lowlifes (2024)",
        description: "The survival instincts of a road-tripping family are put to the test when they have no other choice but to stay the night at a remote homestead.",
        embedId: "7499099933222",
        genres: ["Thriller","Horror"],
        source: "okru"
    },

     {
        title: "IT 1990 ",
        description: "In 1960, seven pre-teen outcasts fight an evil demon who poses as a child-killing clown. Thirty years later, they reunite to stop the demon once and for all when it returns to their hometown.",
        embedId: "7404707383846",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Geronimo: An American Legend ",
        description: " The story of the Apache chief and his armed resistance to the U.S. Government's subjugation of his people.",
        embedId: "7286425389606",
        genres: ["Western"],
        source: "okru"
    },

     {
        title: "The Bad Seed",
        description: "A father is forced to question everything he thought he knew about his daughter when he believes that she might have played a role in the tragic death of one of her classmates.",
        embedId: "1008261991065",
        genres: ["Drama","Thriller"],
        source: "okru"
    },

     {
        title: "Pay Back 1999 ",
        description: "Porter (Mel Gibson) is a thief betrayed by both his wife, Lynn (Deborah Kara Unger), and his partner, Val (Gregg Henry), when he is shot in the back after a heist. Slowly, Porter recovers from his wounds and begins a search for Val, intent on recovering his share of the money they stole together. With the aid of prostitute Rosie (Maria Bello), Porter captures Val but still cannot find his cash. For this, Porter will have to challenge an imposing crime syndicate called the Outfit.",
        embedId: "979802917529",
        genres: ["Action"],
        source: "okru"
    },

     {
        title: "Bone Tomahawk (2015) ",
        description: " In the Old West, a small-town sheriff and his rag-tag posse set out to rescue several townspeople from a brutal cave-dwelling, cannibalistic Indian tribe.",
        embedId: "6461509208614",
        genres: ["Horror","Western"],
        source: "okru"
    },
      {
        title: "Jennifer's Body 2019 ",
        description: " A newly-possessed high-school cheerleader turns into a succubus who specializes in killing her male classmates. Can her best friend put an end to the horror?",
        embedId: "967038929561",
        genres: ["Horror"],
        source: "okru"
    },
      {
        title: "Rio Bravo 1959",
        description: " A small-town sheriff in the American West enlists the help of a disabled man, a drunk, and a young gunfighter in his efforts to hold in jail the brother of the local bad guy.",
        embedId: "7965129706199",
        genres: ["Western"],
        source: "okru"
    },
      {
        title: "We Were Soldiers 2002 ",
        description: " The story of the first major battle of the American phase of the Vietnam War, and the soldiers on both sides that fought it, while their wives wait nervously and anxiously at home for the good news or the bad news.",
        embedId: "7790913129175",
        genres: ["War"],
        source: "okru"
    },
      {
        title: "Platoon 1986",
        description: " Chris Taylor, a neophyte recruit in Vietnam, finds himself caught in a battle of wills between two sergeants, one good and the other evil. A shrewd examination of the brutality of war and the duality of man in conflict.",
        embedId: "9363592120858",
        genres: ["War"],
        source: "okru"
    },
      {
        title: "Hacksaw Ridge 2016 ",
        description: " World War II American Army Medic Desmond T. Doss, serving during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
        embedId: "10488723737169",
        genres: ["War"],
        source: "okru"
    },

     {
        title: "Soldier Blue 1970 ",
        description: " After a cavalry patrol is ambushed by the Cheyenne, the two survivors, a soldier and a woman, must reach the safety of the nearest fort",
        embedId: "6172174715419",
        genres: ["Western"],
        source: "okru"
    },
     {
        title: "The Perfect Storm [2000]  ",
        description: "An unusually intense storm pattern catches some commercial fishermen unaware and puts them in mortal danger.",
        embedId: "725902166561",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Titanic 1997 ",
        description: " A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        embedId: "9605610932881",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Taken 2008 ",
        description: " A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.",
        embedId: "9640291732145",
        genres: ["Action","Thriller"],
        source: "okru"
    },
     {
        title: "Wedding Crashers 2005",
        description: " John Beckwith and Jeremy Grey, a pair of committed womanizers who sneak into weddings to take advantage of the romantic tinge in the air, find themselves at odds with one another when John meets and falls for Claire Cleary.",
        embedId: "3551833164343",
        genres: ["Comedy"],
        source: "okru"
    },
     {
        title: "Goldfinger 1964 ",
        description: " While investigating a gold magnate's smuggling, James Bond uncovers a plot to contaminate the Fort Knox gold reserve.",
        embedId: "7364356082387",
        genres: ["Action"],
        source: "okru"
    },
     {
        title: "Holmes & Watson 2018 ",
        description: "A humorous take on Sir Arthur Conan Doyle's classic mysteries featuring Sherlock Holmes and Doctor Watson.",
        embedId: "9530383075878",
        genres: ["Action","Comedy"],
        source: "okru"
    },
     {
        title: "Thirteen 2003 ",
        description: " A thirteen-year-old girl's relationship with her mother is put to the test as she discovers drugs, sex, and petty crime in the company of her cool but troubled best friend.",
        embedId: "9519964621350",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Open Graves 2009 ",
        description: " A group of surfers discover an old board game which claims a life every time it is played.",
        embedId: "9519433386534",
        genres: ["Horror"],
        source: "okru"
    },
    
     {
        title: "urge 2016 ",
        description: " An island getaway turns deadly when a mysterious nightclub owner (Pierce Brosnan) introduces a group of friends to a drug that can't be taken more than one time.",
        embedId: "1076555680409",
        genres: ["Drama","Sci-Fi"],
        source: "okru"
    },
     {
        title: "A Sierra Nevada Gunfight (2013) ",
        description: " Gold miner Roger Hazard brings his twelve year old son Casper to the treacherous gold fields of 1870s California. The two of them work a small mine in the southern fields but when Roger begins to lose touch with reality young Casper ends up on his own. Casper faces danger around every corner but must find the strength to save his father from himself and still manage to fight off the savage Indians and ruthless bushwhackers that plague them across California's breathtaking Sierra Nevadas. Genre: Western Thriller. In the mold of The Shining and Treasure of the Sierra Madre",
        embedId: "3684168632887",
        genres: ["Western"],
        source: "okru"
    },
     {
        title: "Leave the World Behind 2013 ",
        description: " A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices, and two strangers appear at their door.",
        embedId: "9517395020326",
        genres: ["Drama","Sci-Fi"],
        source: "okru"
    },
     {
        title: "Chaplin (1992)",
        description: "An elderly Charlie Chaplin discusses his autobiography with his editor, recounting his amazing journey from his poverty-stricken childhood to world-wide success after the ingenious invention of the Little Tramp.",
        embedId: "9513004239398",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "The Nanny (2023)",
        description: "A wealthy couple hire a young girl from Finland to take care of their newborn. These new parents should be in a state of bliss, so why does it seem like they are trying to kill each other?",
        embedId: "9500319025702",
        genres: ["Drama","Thriller"],
        source: "okru"
    },
     {
        title: "Tuesday 2023",
        description: "A mother and her teenage daughter must confront Death when it arrives in the form of an astonishing talking bird.",
        embedId: "9487379925542",
        genres: ["Drama","Sci-Fi"],
        source: "okru"
    },
     {
        title: "Queen of the Ring 2024",
        description: "In a time when pro wrestling for women was illegal all over the United States, a small town single mother embraces the danger as she dominates America's most masculine sport and becomes the first million dollar female athlete in history.",
        embedId: "9481252440614",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "The Sexiest Man in Winnipeg",
        description: "When a polite robber carries out a series of odd bank heists, the police investigation takes a sharp turn, pointing to Steve Vogelsang, a garrulous former broadcaster once known as The Sexiest Man in Winnipeg.",
        embedId: "9481251785254",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Marijuambies 2025",
        description: "Marijuambies is a hilarious new comedy that follows the story of a weed dealer and his hippie friend who accidentally sell poisoned weed, turning their customers into zombies. Directed by Brian Foster.",
        embedId: "9481251326502",
        genres: ["Drama","Comedy"],
        source: "okru"
    },
     {
        title: "The Devils Hacksaw 2025",
        description: "In a quiet little town in Pennsylvania terror strikes when one of the notorious inmates at the Greystone Asylum escapes. With a thirst for vengeance, he embarks on a brutal killing spree, leaving the townsfolk in a state of panic.",
        embedId: "9468701313574",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Goodfellas.1990. FHD",
        description: "In 1955, Henry Hill, a high school student, becomes enamored of the criminal life in his neighborhood, and begins working for Paul Paulie Cicero and his associates: James Jimmy the GentConway, a truck hijacker; and Tommy DeVito, a fellow juvenile delinquent. Henry begins as fence for Jimmy, gradually working his way up to more serious crimes. Enjoying the perks of their criminal life, the three associates spend most of their nights at the Copacabana nightclub, carousing with women. Henry starts dating Karen Friedman, a Jewish woman from the Five Towns area of Long Island. Karen is initially troubled by Henry's criminal activities, but is eventually seduced by his glamorous lifestyle. They marry, despite her parents' disapproval...",
        embedId: "1106851990168",
        genres: ["Drama","Crime","Thriller"],
        source: "okru"
    },
     {
        title: "Blue 2024",
        description: "Set on England's Southwest coast, the story follows a father-son pair of struggling fishermen, John Winter and Charlie. A huge loss in their lives leads to a confrontation with emotions neither are equipped to deal with.",
        embedId: "9459849497126",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Rust 2024",
        description: "An orphaned boy of 13 left to fend for himself and his younger brother in 1880s Wyoming is sentenced to hang for the accidental killing of a local rancher. His estranged grandfather breaks him out of jail and they go on the run to Mexico.",
        embedId: "9453161351718",
        genres: ["Western"],
        source: "okru"
    },
     {
        title: "King.Arthur.2004.1080p",
        description: "A demystified take on the tale of King Arthur and the Knights of the Round Table.",
        embedId: "6806099331779",
        genres: ["Action"],
        source: "okru"
    },
     {
        title: "Snatch (2000)",
        description: "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
        embedId: "8153582799537",
        genres: ["Drama","Comedy","action"],
        source: "okru"
    },
     {
        title: "Lock, Stock and Two Smoking Barrels 1998",
        description: "When four small-time criminals lose a rigged poker game against a London kingpin, he gives them one week to settle their enormous debt",
        embedId: "9602459634262",
        genres: ["Drama","Comedy","Action"],
        source: "okru"
    },
     {
        title: "Nosferatu the Vampyre 1978",
        description: "Count Dracula moves from Transylvania to Wismar, spreading the Black Plague across the land. Only a woman pure of heart can bring an end to his reign of horror.",
        embedId: "3060519602894",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "The Shawshank Redemption.1994",
        description: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
        embedId: "7957536901741",
        genres: ["Drama","Crime"],
        source: "okru"
    },
     {
        title: "The Godfather, 2 - (1974)",
        description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        embedId: "277362379400",
        genres: ["Drama","Crime"],
        source: "okru"
    },
     {
        title: "The Godfather Part III 1990",
        description: "Follows Michael Corleone, now in his 60s, as he seeks to free his family from crime and find a suitable successor to his empire.",
        embedId: "6872072915582",
        genres: ["Drama","Crime"],
        source: "okru"
    },
     {
        title: "Pulp.Fiction.1994.1080",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        embedId: "7061358971461",
        genres: ["Drama","Crime"],
        source: "okru"
    },
     {
        title: "Schindler's List 1993 1080",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        embedId: "9135100004896",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Jaws 1995",
        description: "When a massive killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
        embedId: "9666610006702",
        genres: ["Action"],
        source: "okru"
    },
     {
        title: "The Dark Knight (2008) HD",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        embedId: "7652106504857",
        genres: ["Action"],
        source: "okru"
    },
     {
        title: "Superman III (1983)",
        description: "Synthetic kryptonite laced with tar splits Superman in two: good Clark Kent and bad Man of Steel.",
        embedId: "2393667668662",
        genres: ["Action"],
        source: "okru"
    },
     {
        title: "Superman IV: The Quest for Peace (1987)",
        description: "The Man of Steel crusades for nuclear disarmament and meets Lex Luthor's latest creation, Nuclear Man.",
        embedId: "2393667603126",
        genres: ["Action"],
        source: "okru"
    },
     {
        title: "Superman (1978) Special Edition (720p)",
        description: "RESTORED WITH ADDITIONAL FOOTAGE! Follow the Man of Steel's story from Krypton to Smallville to his life in Metropolis and his alter-ego, mild-mannered Daily Planet reporter Clark Kent. Both Superman and Clark Kent must contend with the brilliant villain Lex Luthor and the tenacious, often-in-danger reporter Lois Lane.",
        embedId: "2323019860507",
        genres: ["Action"],
        source: "okru"
    },
     {
        title: "Superman 2  (1980)  720p",
        description: "Superman agrees to sacrifice his powers to start a relationship with Lois Lane, unaware that three Kryptonian criminals he inadvertently released are conquering Earth." ,
        embedId: "382886415088",
        genres: ["Action"],
        source: "okru"
    },
     {
        title: "Scum (1979) HD",
        description: "Scum is a 1979 British crime drama film. It features Ray Winstone, Mick Ford, Julian Firth, John Blundell, Phil Daniels, and Ray Burdis.",
        embedId: "9350991186638",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Scrubbers (1982)",
        description: "Scrubbers is a 1982 British drama film. It features Amanda York, Chrissie Cotterill, Elizabeth Edmonds, Kate Ingram, and Kathy Burke. ",
        embedId:"9190631475918",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Planet of the Apes 2001 1080",
        description: "In 2029, an Air Force astronaut crash-lands on a mysterious planet where evolved, talking apes dominate a race of primitive humans.",
        embedId: "9227425155812",
        genres: ["Sci-Fi"],
        source: "okru"
    },
     {
        title: "Rocky Balboa 2006 Director's Cut 2160p 4K BluRay",
        description: "His wife is dead and his son hates him, but this old man still has fight in him! When he loses a highly publicized virtual boxing match to ex-champ Rocky Balboa, reigning heavyweight titleholder Mason Dixon retaliates by challenging Rocky to a nationally televised, 10-round exhibition bout. To the surprise of his son and friends, Rocky agrees to come out of retirement and face an opponent who's faster, stronger, and thirty years his junior.",
        embedId: "9403827948260",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Everest 2015",
        description: "On May 10, 1996, mountain guides Rob Hall and Scott Fischer combine their expedition teams for a final ascent to the summit of Mount Everest. With little warning, a storm strikes the mountain and the climbers must now battle to survive.",
        embedId: "9278677715494",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Sharp Corner 2024 1080p",
        description: "A dedicated family man becomes obsessed with saving the lives of the car accident victims on the sharp corner in front of his house  an obsession that could cost him everything.",
        embedId: "9374293297892",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Rabid.2019.720p",
        description: "Rabid is a 2019 Canadian horror film directed and co-written by Jen and Sylvia Soska and starring Laura Vandervoort, Ben Hollingsworth, and Phil Brooks. It is a remake of the 1977 film of the same name directed by David Cronenberg.",
        embedId: "1398321449625",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "The Utah Cabin Murders 2019",
        description: "Two sisters fight for survival when masked intruders invade their vacation cabin.",
        embedId: "1375699077785",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Artik 2019",
        description: "A comic book obsessed serial killer teaches his son how to get away with a series of brutal murders until the boy befriends a mysterious man who threatens to expose everything.",
        embedId: "1375699012249",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Stained 2019",
        description: "A terrifying, modern adaptation of Shakespeare's Macbeth set in Scotland, CA. Scorning the mediocrity of their mundane lives, John and Jane Macbeth carry out a horrific plan to make the American dream a reality.",
        embedId: "1375698946713",
        genres: ["Drama","Horror"],
        source: "okru"
    },
     {
        title: "The Unseen 2016 ",
        description: "A man who abandoned his family now risks everything to find his missing daughter, including exposing the secret that he is becoming invisible.",
        embedId: "M0d6iuIpR_g",
        genres: ["Sci-Fi"],
        source: "youtube"
    },
     {
        title: "The Foreigner (2017)",
        description: "Jackie Chan plays Quan Ngoc Minh, a humble London businessman whose daughter is killed in a terrorist bombing claimed by a splinter group of the IRA. He then seeks revenge on those responsible.",
        embedId: "Xpm7URf-Jb8",
        genres: ["Action"],
        source: "youtube"
    },
     {
        title: "Law Abiding Citizen (2009)",
        description: "Clyde Shelton, intentionally gets himself into prison to orchestrate a complex revenge plot against the corrupt justice system that allowed his family's killers to go free. Jamie Foxx plays Nick Rice, the assistant district attorney who becomes his adversary.",
        embedId: "-WEsxS-lJKs?si",
        genres: ["Action"],
        source: "youtube"
    },
     {
        title: "3 Days to Kill (2014)",
        description: " Kevin Costner plays Ethan Renner, a CIA assassin who is trying to track down two international terrorists known as The Wolf and his lieutenant, The Albino.",
        embedId: "kTgGI7pXoMk",
        genres: ["Action"],
        source: "youtube"
    },
     {
        title: " Unknown (2011)",
        description: "Dr. Martin Harris, who awakens from a coma to find that another man has assumed his identity, and even his own wife doesn't recognize him. He then sets out to prove who he is and uncover the conspiracy behind it",
        embedId: "RWFzTMgrIyI",
        genres: ["Thriller","Drama"],
        source: "youtube"
    },
     {
        title: "Stolen (2012)",
        description: " Nicolas Cage plays a former thief whose daughter is kidnapped, and he has to find $10 million in 12 hours. Danny Huston plays an FBI agent.",
        embedId: "yWRCE71ZWcQ",
        genres: ["Drama","Thriller"],
        source: "youtube"
    },
     {
        title: "Red Dawn (2012)",
        description: " Chris Hemsworth plays Jed Eckert, a Marine who, along with a group of teenagers, defends their hometown in Washington state from a North Korean invasion. They form a guerrilla resistance group called the Wolverines.",
        embedId: "2XIlZDElESI",
        genres: ["Action"],
        source: "youtube"
    },
     {
        title: "Kingdom of the Vampire 1991",
        description: "Jeff works the night shift, then comes home to his domineering mother, who has the grisly habit of slaughtering neighborhood children to satisfy her insatiable bloodlust.",
        embedId: "1365524089497",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Wicked Witches 2018",
        description: "Mark returns to Dumpling Farm, his old hangout. His friend Ian, possessed by demonic witches, lures Mark and others into a trap. The witches consume souls, using Ian and the farm to honey-trap their victims.",
        embedId: "1364470794905",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Criminal 2016",
        description: "A dangerous convict receives an implant containing the memories and skills of a dead CIA agent.",
        embedId: "o4Em8Sxk4OM",
        genres: ["Crime","Action"],
        source: "youtube"
    },
     {
        title: "Man on Fire 2004",
        description: "In Mexico City, a former CIA operative swears vengeance on those who committed an unspeakable act against the family he was hired to protect.",
        embedId: "967003081369",
        genres: ["Action","Thriller"],
        source: "okru"
    }, {
        title: "30 Daye of Nights 2007",
        description: "After an Alaskan town is plunged into darkness for a month, it is attacked by a bloodthirsty gang of vampires.",
        embedId: "967003802265",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "10.5: Apocalypse 2006",
        description: "A massive earthquake creates a chain of events that threaten two of the largest nuclear reactors.",
        embedId: "967976422041",
        genres: ["Sci-Fi"],
        source: "okru"
    },
     {
        title: "The Craving 2011",
        description: "Leading a double life, Chef Ronnie spends her days as a charming celebrity chef who thrives and shines as owner of a trendy Spanish tapas restaurant in San Francisco, and spends her nights in ways too gruesome to fathom. As Chef Ronnie's reputation scorches up the culinary scene, San Francisco's murder count hits a record high. Haunted by her past in the form a vengeful lover, and caught in the seductive cross fire of an increasingly serious relationship; Chef Ronnie has bitten off more than she can chew.",
        embedId: "967976487577",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Howl 2015",
        description: "When passengers on a train are attacked by a creature, they must band together in order to survive until morning.",
        embedId: "970099069337",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "One More Shot 2024",
        description: "Following the attack on the black site in Poland, Navy SEAL Jake Harris is ordered to escort terrorist suspect Amin Mansur to Washington D.C for interrogation.",
        embedId: "/eGjBfDnpUVs",
        genres: ["Action"],
        source: "youtube"
    },
     {
        title: "Final Destination 2000 1080p BluRay",
        description: "After getting a premonition about a plane crash on his school trip, Alex, a student, saves a few of his classmates. However, their situation gets complicated when death starts chasing them.",
        embedId: "9371838974692",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Final Destination 2 2003 1080p BluRay",
        description: "When Kimberly has a violent premonition of a highway pileup she blocks the freeway, keeping a few others meant to die, safe...Or are they? The survivors mysteriously start dying and it's up to Kimberly to stop it before she's next.",
        embedId: "9371839302372",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Final Destination 3 (2006)",
        description: "Wendy Christensen and a group of teens who escaped a fatal roller-coaster crash face a bloody date with Death.",
        embedId: "8254576527953",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "The Twilight Saga: Breaking Dawn - Part 2",
        description: "After the birth of Renesmee/Nessie, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.",
        embedId: "1316303473392",
        genres: ["Drama","Sci-Fi"],
        source: "okru"
    },
     {
        title: "Mannequin 2: On The Move (1991)",
        description: "Although Jason (William Ragsdale) works as a department store clerk, he is also a reincarnated prince. Long ago, his beloved Jessie (Kristy Swanson) was snatched away from him by an evil wizard (Terry Kiser) who used his powers to transform her into wooden statue. Now Jessie is in Jason's department store as a mannequin. When he encounters her, she awakens from her thousand-year sleep. They quickly revive their romance, but the evil wizard has been reincarnated as well, and he's up to no good.",
        embedId: "943377877542",
        genres: ["Comedy"],
        source: "okru"
    },
     {
        title: "Ghost.Ship.2002",
        description: "A salvage crew discovers a long-lost 1962 passenger ship floating lifeless in a remote region of the Bering Sea, and soon notices that its long-dead inhabitants may still be on board.",
        embedId: "705719306785",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Infernal 2015",
        description: "A happy young couple welcomes their first child shortly after getting married. Their joy quickly turns to fear when the girl starts acting strangely and unexplained phenomena start happening around the house.",
        embedId: "977205987993",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "The Inflicted 2012",
        description: "David O'Hara is a troubled medical student who kidnaps, rapes and murders women. He impregnates his victim, Melissa, in an attempt to replace his lost family. When Melissa escapes, he goes on a murderous rampage to get his family back.",
        embedId: "977208543897",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Safe Haven 2013",
        description: "A young woman with a mysterious past lands in Southport, North Carolina where her bond with a widower forces her to confront the dark secret that haunts her.",
        embedId: "977407052441",
        genres: ["Drama"],
        source: "okru"
    },
     {
        title: "Final Destination 2000 1080p BluRay",
        description: "After a teenager has a terrifying vision of him and his friends dying in a plane crash, he prevents the accident only to have Death hunt them down, one by one.",
        embedId: "9371838974692",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Final Destination 2 2003 1080p BluRay",
        description: "When Kimberly has a violent premonition of a highway pileup she blocks the freeway, keeping a few others meant to die, safe...Or are they? The survivors mysteriously start dying and it's up to Kimberly to stop it before she's next.",
        embedId: "9371839302372",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Final Destination 3 2006",
        description: "Wendy Christensen and a group of teens who escaped a fatal roller-coaster crash face a bloody date with Death.",
        embedId: "5050096880350",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Splinter",
        description: "Trapped in an isolated gas station by a voracious Splinter parasite that transforms its still-living victims into deadly hosts, a young couple and an escaped convict must find a way to work together to survive this primal terror.",
        embedId: "981264173721",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "I am omega 2007",
        description: "Father-daughter archaeologists Miles (Denis O'Hare) and Nora Holden (Ashley Hinshaw) discover a unique pyramid that has been buried beneath the Egyptian desert for 5,000 years. Accompanied by a newswoman (Christa-Marie Nicola) and her team, the archaeologists enter the tomb and promptly become trapped. Hopelessly lost within the pyramid's labyrinthine structure, the group faces deadly perils that threaten their escape, including collapsing floors and bloodthirsty predators.",
        embedId: "981271186073",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "The Tommyknockers 1993",
        description: "The small town of Haven becomes a hot-bed of inventions all run by a strange green power device. The whole town is digging something up in the woods, and only an alcoholic poet can discover the secret of the Tommyknockers.",
        embedId: "1002381707929",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "The Amityville Horror (2005)",
        description: "When George Lutz (Ryan Reynolds) and his wife, Kathy (Melissa George), find a beautiful new house in the small town of Amityville, N.Y., they think the place is too good to be true. After they move in with their kids, they find out the cheap price tag is thanks to the house's sordid history: The former tenant murdered his family after supposedly being possessed by the devil. Believing the home is haunted, the couple finds a priest (Philip Baker Hall) to help them rid the place of evil spirits.",
        embedId: "1002383411865",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Guyver II Dark Hero (1994)",
        description: "Sean Barker, unwilling host to an alien bio-armor known as the Guyver, must fight the Kronos Corporation again before they discover the secrets of the Guyver's origin.",
        embedId: "1002426274201",
        genres: ["Sci-Fi"],
        source: "okru"
    },
    {
        title: "The Texas Chainsaw Massacre (2003)",
        description: "After picking up a traumatized young hitchhiker, five friends find themselves stalked and hunted by a deformed chainsaw-wielding loon and his family of equally psychopathic killers.",
        embedId: "7636091406869",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Zombie Nation 2004",
        description: "A psychotic police officer who murders his female arrestees gets what's coming to him when a horde of zombified women rise from their graves to seek revenge.",
        embedId: "1007769291417",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Serenity Farm 2014",
        description: "Undisturbed for over 20 years, this remote forested island in the Pacific Northwest is visited by a group of campers on horseback. The camp tranquility is broken by violence and terror.",
        embedId: "1007769356953",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "beond skyline 2018 ",
        description: "Detective Mark Corley storms his way onto an alien spaceship to rescue his estranged son. When the ship crashes in Southeast Asia, he forges an alliance with a band of survivors to take back the planet once and for all.",
        embedId: "1009147710105",
        genres: ["Sci-Fi"],
        source: "okru"
    },
    {
        title: "COLD MOON (2017)",
        description: "In a sleepy Southern town, the Larkin family suffer a terrible tragedy and they're about to endure another. Traffic lights blink an eerie warning, a ghostly visage prowls in the streets, and graves erupt from the local cemetery in an implacable march of terror. And beneath the murky surface of the river, a shifting, almost human, shape slowly takes form to seek a terrible vengeance.",
        embedId: "1009147906713",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Rampage 2009",
        description: "A man with a thirst for revenge builds a full body armor from Kevlar and goes on a killing spree.",
        embedId: "1009180674713",
        genres: ["Crime","Thriller"],
        source: "okru"
    },
    {
        title: "Rampage: Capital Punishment",
        description: "A man takes over a TV station and holds a number of hostages as a political platform to awaken humanity, instead of money.",
        embedId: "1009180871321",
        genres: ["Crime","Thriller"],
        source: "okru"
    },
    {
        title: "The First Purge 2018",
        description: "America's third political party, the New Founding Fathers of America, comes to power and conducts an experiment: no laws for 12 hours on Staten Island. No one has to stay on the island, but $5,000 is given to anyone who does.",
        embedId: "1009218423449",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Inbred 2011",
        description: "Four young offenders and their care workers visit the remote Yorkshire village of Mortlake, which prides on keeping itself to itself. A minor incident with locals rapidly escalates into a blood-soaked, deliriously warped nightmare.",
        embedId: "1009869851289",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Abraham Lincoln: Vampire Hunter 2012",
        description: "Abraham Lincoln, the 16th President of the United States, discovers vampires are planning to take over the United States. He makes it his mission to eliminate them.",
        embedId: "1014399437465",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Prometheus.2012.720p.BluRay.",
        description: "The discovery of a clue to mankind's origins on Earth leads a team of explorers to the darkest parts of the universe. Two brilliant young scientists lead the expedition. Shaw (Noomi Rapace) hopes that they will meet a race of benevolent, godlike beings who will in some way verify her religious beliefs, while Holloway (Logan Marshall-Green) is out to debunk any spiritual notions. However, neither the scientists nor their shipmates are prepared for the unimaginable terrors that await them.",
        embedId: "1015245441689",
        genres: ["Sci-Fi"],
        source: "okru"
    },
    {
        title: "Stripped.2012.720p.BluRay",
        description: "Four friends head to Vegas and meet female strippers at a remote location for a night of fun. However, they don't realize that the women work for an organ trafficker and that they are about to be stripped of theirs.",
        embedId: "1015912663705",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "The Transporter Refueled 2015",
        description: "In the south of France, former special-ops mercenary Frank Martin enters into a game of chess with a femme-fatale and her three sidekicks who are looking for revenge against a sinister Russian kingpin.",
        embedId: "1015894903449",
        genres: ["Action"],
        source: "okru"
    },
    {
        title: "Little.Dead.Rotting.Hood.2016.720p",
        description: "The residents of a small town realize that something is killing wolves and people in the woods.",
        embedId: "1015905585817",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Feast 2 sloppy seconds",
        description: "The monsters have made it into a small neighboring town in the middle of nowhere and the locals have to band with the survivors of the bar' slaughter to figure out how to survive.",
        embedId: "1016872700569",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Feast 2005",
        description: "Patrons locked inside a bar are forced to fight monsters.",
        embedId: "1016878402201",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Skinwalkers 2006",
        description: "A 12-year-old boy and his mother become the targets of two warring werewolf packs, each with different intentions and motives.",
        embedId: "1016874404505",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Valhalla.Rising.2009.1080p",
        description: "In 11th-century Scandinavia, an enslaved man dubbed One Eye (Mads Mikkelsen) because of an old facial wound stages a violent uprising against those who imprisoned him. One Eye links up with Eirik (Ewan Stewart) and other Christian fanatics who aim to use their muscle to spread God's word. Headed for Jerusalem, One Eye and his shipmates must cope with crew infighting and attacks from the coastline. But the journey's challenges are only a harbinger of even greater brutality.",
        embedId: "1021591292569",
        genres: ["Action"],
        source: "okru"
    },
    {
        title: "Darkness.Rising.2017",
        description: "The lone survivor of a brutal family massacre must revisit her childhood home on the eve of its destruction and confront her past, as well as a deadly evil.",
        embedId: "1021591358105",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Werewolf.Rising.2014.720p.BluRay",
        description: "Emma travels to her family's cabin in the Arkansas hills to get away from the city. After she settles in, she has to fight for her life when a werewolf begins slaughtering everything in its path.",
        embedId: "1021636184729",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Mutants 2009",
        description: "In the middle of a zombie apocalypse, a resourceful couple hides out in an isolated abandoned building. The woman is pregnant and the man is infected, slowly transforming into the kind of inhuman monster they are trying to escape.",
        embedId: "1021815884441",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "The.House.of.Violent.Desire.2018",
        description: "Awoken by screams in the night, young Evelyn Whipley is found drenched in blood and mysteriously bound to the bed - A Gothic Horror set in the 1940s, a psychosexual thriller disguised as traditional Ghost Story.",
        embedId: "1031999392409",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "It Lives Inside 2018",
        description: "A chronic sleepwalker reads from a mysterious text that foretells his impending demonic possession. He struggles to hold his family together as the ancient evil threatens to consume everything he holds dear.",
        embedId: "1034554051225",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Jeepers Creepers 2 2003",
        description: "Set a few days after the original, a championship basketball team's bus is attacked by The Creeper, the winged, flesh-eating terror, on the last day of his 23-day feeding frenzy.",
        embedId: "1038368180889",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Jeepers Creepers (2001)",
        description: "A brother and sister driving home through isolated countryside for spring break encounter a flesh-eating creature which is in the midst of its ritualistic eating spree.",
        embedId: "7451752729259",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Jeepers Creepers 3 (2017)",
        description: "Sheriff Dan Tashtego and a team of creeper hunters enlist the help of officer Davis Tubbs to help stop the monster's eating spree.",
        embedId: "2928047557260",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Dracula: The Dark Prince 2013",
        description: "In his search for the Lightbringer, Dracula crosses paths with a beautiful crusader named Alina who bears a remarkable resemblance to his murdered bride. One look at her and Dracula is immediately smitten. Could Alina be the reincarnation of his long-dead love? Dracula has Alina kidnapped and brought to his castle where the Beast must now try to win his Beauty's heart.",
        embedId: "4230911101454",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "All.the.Boys.Love.Mandy.Lane.2006.720p.BluRay",
        description: "Beautiful Mandy Lane (Amber Heard) isn't a party girl but, when classmate Chloe (Whitney Able) invites the Texas high school student to a bash in the countryside, she reluctantly accepts. After hitching a ride with a vaguely scary older man (Anson Mount), the teens arrive at their destination. Partying ensues, and Mandy's close pal, Emmet (Michael Welch), keeps a watchful eye on the young males making a play for Mandy. Then two of the students are murdered.",
        embedId: "1071316077209",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Wrong Turn 2003",
        description: "Chris and a group of five friends are left stranded deep in the middle of the woods after their cars collide. As they venture deeper into the woods, they face an uncertain and bloodcurdling fate.",
        embedId: "1079522101913",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Wrong Turn 2: Dead End 2007",
        description: "A group of reality show contestants find themselves fighting for their survival against a family of hideously deformed inbred cannibals who plan to ruthlessly butcher them all.",
        embedId: "1079531539097",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Wrong Turn 3: Left for Dead 2009",
        description: "When their transfer bus crashes in a West Virginia forest, a group of convicts and a corrections officer meet a rafter who is on the run from cannibalistic hillbillies who have murdered her friends.",
        embedId: "1079522232985",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Wrong Turn 4: Bloody Beginnings 2011",
        description: "A group of college students gets lost in a storm during their snowmobiling trip and takes shelter in an abandoned sanitarium which, unbeknown to them, is home to deformed cannibals.",
        embedId: "1079522167449",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Wrong Turn 5: Bloodlines 2012",
        description: "A group of college students, on a trip to the Mountain Man Festival on Halloween in West Virginia, encounter a clan of cannibals.",
        embedId: "1079522036377",
        genres: ["Horror"],
        source: "okru"
    },
    {
        title: "Wrong Turn 6: Last Resort 2014",
        description: "An inheritance leads a young man and his friends to an abandoned resort inhabited by two sketchy caretakers and a clan of mutant cannibals.",
        embedId: "1071531690649",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Gangsters.Guns.Zombies.2012.720p.BluRay",
        description: "Q, Tony, Danny and Steve think the police are their biggest problem after they pull off a robbery. But when the dead rise from the grave, they have to hide out with a woman and her grandmother in a fortified windmill.",
        embedId: "1072197012121",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Cockneys vs Zombies 2012",
        description: "A gang of bank robbers fight their way out of a zombie-infested London.",
        embedId: "1072197077657",
        genres: ["Horror","Comedy"],
        source: "okru"
    },
     {
        title: "Left Behind 2014",
        description: "A small group of survivors is left behind after millions of people suddenly vanish and the world is plunged into chaos and destruction.",
        embedId: "1076555549337",
        genres: ["Sci-Fi"],
        source: "okru"
    },
     {
        title: "Tiger House 2015",
        description: "Kelly sneaks into her boyfriend's house but tonight, she's not the only unwelcome visitor. As the situation spirals out of control, the suburban house becomes a terrifying arena for violence.",
        embedId: "1076676987545",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Cabin Fever 2: Spring Fever 2009",
        description: "A high school prom faces a deadly threat: a flesh-eating virus that spreads via a popular brand of bottled water.",
        embedId: "1079522429593",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Cabin Fever 2002",
        description: "Five college graduates rent a cabin in the woods and begin to fall victim to a horrifying flesh-eating virus, which attracts the unwanted attention of the homicidal locals.",
        embedId: "1079539206809",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Cabin Fever 3 Patient Zero 2014",
        description: "When a group of friends enjoying a bachelor cruise in the Caribbean stumble upon a research facility on a remote island, a deadly virus is unleashed. The group must find a way to survive before the flesh eating virus consumes them all.",
        embedId: "1079544253081",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Breathing.Room.2008.720p.BluRay",
        description: "Thrown naked into a desolate room with thirteen strangers, Tonya discovers that she is the final contestant in a deadly game. Restrained by lethal electronic collars, the players must utilize hints and tools from a box marked pieces to find both an exit and the reason for their abduction. One by one the players are eliminated as their curfew begins and the lights go out. With each dead body comes another clue, which they use to discover that one of them is the killer.",
        embedId: "1100126882457",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "Running with the Devil (2019).",
        description: "The CEO of an international conglomerate sends two of his most regarded executives to investigate why shipments of cocaine are being hijacked and over cut somewhere on the supply chain.",
        embedId: "9f621XHZ6nQ",
        genres: ["Horror"],
        source: "youtube"
    },
     {
        title: "The Bank Job 2008",
        description: "Martine offers Terry a lead on a foolproof bank hit on London's Baker Street. She targets a roomful of safe deposit boxes worth millions in cash and jewelry along with a treasure trove of dirty secrets.",
        embedId: "GQtwrbZZBzQ",
        genres: ["Action","Crime"],
        source: "youtube"
    },
     {
        title: "The Beverly Hillbillies 1993",
        description: "Mild-mannered dirt-poor hill-dweller Jed Clampett strikes it rich when oil is discovered on his property. At his cousin Pearl's insistence, he moves his family to Beverly Hills to better enjoy his newfound wealth.",
        embedId: "7333324327462",
        genres: ["Comedy"],
        source: "okru"
    },
     {
        title: "In Pursuit of Honor 1996",
        description: "In 1932, a modernizing U.S. Army orders the Cavalry to destroy its horses but some sympathetic cavalrymen, defying orders, steal the horses in order to save them from destruction, to the dismay of the top Army-brass.",
        embedId: "HWU9XIp49lk",
        genres: ["Action"],
        source: "youtube"
    },
     {
        title: "War.2007.720p.Bluray",
        description: "An FBI Agent seeks vengeance on a mysterious assassin known as Rogue who murdered his partner.",
        embedId: "89959697073",
        genres: ["Action"],
        source: "okru"
    },
     {
        title: "Prey (2021)",
        description: "A hiking trip into the wild turns into a desperate bid for survival for five friends on the run from a mysterious shooter.",
        embedId: "3300653468252",
        genres: ["Thriller","Drama"],
        source: "okru"
    },
     {
        title: "The Descent 2023",
        description: "The film is described as a thriller where a group of individuals in a small, peaceful community must uncover the secrets behind a series of horrifying attacks by mysterious creatures that emerge from the depths of darkness.",
        embedId: "9538436008486",
        genres: ["Horror"],
        source: "okru"
    },
     {
        title: "The Shape of Water",
        description: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
        embedId: "6544850094630",
        genres: ["Drama","Sci-Fi"],
        source: "okru"
    },
     {
        title: "Womb 2025",
        description: "Trapped in a remote hunting cabin, a pregnant recovering addict battles to escape the clutches of a deranged hunter obsessed with abducting her full term fetus.",
        embedId: "9451032152614",
        genres: ["Horror","Thriller"],
        source: "okru"
    },
     {
        title: "The Squatchers 2025",
        description: "A group of friends, known as The Squatchers set out to fulfill their dream of finding Bigfoot, only to wind up on a heart-pounding quest for survival against the unknown. This is one adventure you have to see to believe.",
        embedId: "9450984573478",
        genres: ["Comedy"],
        source: "okru"
    },
     {
        title: "War Party (1988) Director's Cut",
        description: "A group of re-enactors attempt to stage a hundred year anniversary battle between US Cavalry and Blackfeet Indians. Unfortunately racial hostilities and a real gun lead to some all too real casualties, and three young Blackfoot men are caught in the middle.",
        embedId: "9465828149798",
        genres: ["Action","Drama"],
        source: "okru"
     },
      {
        title: "Night of the Tommyknockers 2022",
        description: "When miners blast for gold in the 1870's, they accidentally release ancient creatures known as Tommyknockers. The Town of Deer Creek, Nevada is soon under siege with only a handful of survivors held up in the local saloon.",
        embedId: "9273472846374",
        genres: ["Horror","Weastern","Thriller"],
        source: "okru"
     },
      {
        title: "Blazing Saddles 1974",
        description: "In order to ruin a western town and steal their land, a corrupt politician appoints a black sheriff, who promptly becomes his most formidable adversary.",
        embedId: "7502168066598",
        genres: ["Western","Comedy"],
        source: "okru"
     },
      {
        title: "Ride With The Devil 1999",
        description: "During the American Civil War, two friends join the Bushwhackers, a militant group loyal to the Confederacy.",
        embedId: "7210048883238",
        genres: ["Western","Drama","War"],
        source: "okru"
     },
      {
        title: "The Thicket 2024",
        description: "When a bounty hunter and a band of unlikely heroes pursue a brutal killer, they find themselves in a deadly no-man's-land known as The Thicket.",
        embedId: "9136509291046",
        genres: ["Western","Drama"],
        source: "okru"
     },
      {
        title: "Ghost Town (2023)",
        description: "In the untamed West of Victorian-era America, a drifter takes a job as a barman in a small Arizona town. After a series of bizarre deaths, he soon finds himself the target of suspicion",
        embedId: "6364574190118",
        genres: ["Western","Horror"],
        source: "okru"
     },
      {
        title: "Mississippi Burning 1988 REMASTERED 1080p",
        description: "Two FBI agents with wildly different styles arrive in Mississippi to investigate the disappearance of three civil rights activists.",
        embedId: "8443536542376",
        genres: ["Crime","Drama","Thriller"],
        source: "okru"
     },
      {
        title: "From Dusk Till Dawn 1996 ",
        description: "Two criminals and their hostages unknowingly seek temporary refuge in a truck stop populated by vampires, with chaotic results.",
        embedId: "6164321405602",
        genres: ["Horror"],
        source: "okru"
     },
      {
        title: "Beyond the Night 2018",
        description: "When a Marine's son reveals damning information about a local gangster's missing daughter, a war of attrition wreaks havoc on their forgotten coal mining town.",
        embedId: "1L7UpBTOzlU",
        genres: ["Drama","Thriller"],
        source: "youtube"
     },
      {
        title: "Extinction: The G.M.O. Chronicles",
        description: "The remaining survivors of pan-global epidemic face a race against time to find a cure before they succumb to its zombie-inducing effects. Holed up in an abandoned military base, Tom and his fellow survivors, their numbers dwindling with each successive day, desperately search for a way of stopping the outbreak and returning their lives to normal",
        embedId: "L_njwTIXNA0",
        genres: ["Horror"],
        source: "youtube"
     },
      {
        title: "London Boulevard",
        description: "An ex-con with a reputation tries to go straight by working as a handy man for a reclusive actress but this is unfortunately not the wish of London's underground crime lord.",
        embedId: "3838862690871",
        genres: ["Drama","Thriller"],
        source: "okru"
     },
      {
        title: "Michael Collins 1996  720p",
        description: "Neil Jordan's historical biopic of Irish revolutionary Michael Collins, the man who led a guerrilla war against the UK, helped negotiate the creation of the Irish Free State, and led the National Army during the Irish Civil War.",
        embedId: "1078123301423",
        genres: ["Drama","Thriller","War"],
        source: "okru"
     },
      {
        title: "Outlaw.King.2018.1080p",
        description: "A true David vs. Goliath story of how the 14th century Scottish 'Outlaw King' Robert the Bruce used cunning and bravery to defeat the much larger and better equipped occupying English army.",
        embedId: "4982591130190",
        genres: ["Action","Drama","History"],
        source: "okru"
     },
      {
        title: "The Outfit (2022)",
        description: "An expert cutter must outwit a dangerous group of mobsters in order to survive a fateful night.",
        embedId: "3793980295758",
        genres: ["Drama","Crime"],
        source: "okru"
     },
      {
        title: "Lakeview Terrace (2008)",
        description: "A troubled and racist African-American L.A.P.D. Officer will stop at nothing to force out a friendly interracial couple who just moved in next door to him.",
        embedId: "9447996131878",
        genres: ["Crime","Thriller"],
        source: "okru"
     },
      {
        title: "Wanted 2008",
        description: "A frustrated office worker discovers that he is the son of a professional assassin, and that he shares his father's superhuman killing abilities.",
        embedId: "9414094424614",
        genres: ["Action","Crime","Thriller"],
        source: "okru"
     },
      {
        title: "Last County 2023",
        description: "An alcoholic woman with a marriage on the rocks finds an unlikely ally in a wounded drug mule when the two of them are forced to defend her home from a violent siege of corrupt small town cops.",
        embedId: "9348503177766",
        genres: ["Crime","Thriller"],
        source: "okru"
     },
      {
        title: "Stir of Echoes 1999",
        description: "A man has visions of a missing neighborhood girl.",
        embedId: "7807656921638",
        genres: ["Horror","Thriller"],
        source: "okru"
     },
      {
        title: "Event Horizon (1997)",
        description: "A rescue crew is tasked with investigating the mysterious reappearance of a spaceship that had been lost for seven years.",
        embedId: "9547193125414",
        genres: ["Sci-Fi","Horror","Thriller"],
        source: "okru"
     },
      {
        title: "1992 (2024)",
        description: "A factory worker must protect his son during the 1992 L.A. uprising after the Rodney King verdict.",
        embedId: "9544468662822",
        genres: ["Thriller","Action","Drama"],
        source: "okru"
     },
      {
        title: "Abduct (2025)",
        description: "A woman's peaceful mountain getaway takes a bizarre turn when her boyfriend disappears, and a random naked man shows up claiming to be him.",
        embedId: "9517374966310",
        genres: ["Thriller"],
        source: "okru"
     },
      {
        title: "Hell of a Summer 2023",
        description: "The counselors of a summer camp are terrorized by a masked killer.",
        embedId: "9435574831654",
        genres: ["Horror"],
        source: "okru"
     },
      {
        title: "Dead Mail (2024)",
        description: "An ominous help note finds its way to a 1980s post office, connecting a dead letter investigator to a kidnapped keyboard technician.",
        embedId: "9409949600294",
        genres: ["Horror","Thriller"],
        source: "okru"
     },
      {
        title: "It Feeds (2025",
        description: "After a young girl bursts into their home psychiatry practice claiming an entity is feeding on her,Jordan and her clairvoyant mother must find a way to stop the force before the girl is taken completely.",
        embedId: "9409851886118",
        genres: ["Horror"],
        source: "okru"
     },
      {
        title: "Desert Fiends 2024",
        description: "Six friends on their way to a concert break down in the middle of nowhere and encounter a deranged family that lives in the desert killing anyone they come across.",
        embedId: "9468714289702",
        genres: ["Horror"],
        source: "okru"
     },
     {
        title: "Nothing to Lose 1997",
        description: "Nick's wife is in bed with his boss. He later gets a gun to his head by a carjacker but steps on the gas pedal. They end up friends after adventures together:holdups, burglary, reckless driving, and revenge. Twists follow.",
        embedId: "2677676706342",
        genres: ["Comedy"],
        source: "okru"
     },
     {
        title: "Nothing But Trouble 1991",
        description: "A businessman and his friends are captured by a sadistic judge and his equally odd family in a bizarre mansion in the backwoods.",
        embedId: "4357179247142",
        genres: ["Comedy"],
        source: "okru"
     },
     {
        title: "The Rocky Horror Picture Show 1975",
        description: "A newly-engaged couple have a breakdown in an isolated area and must seek shelter at the bizarre residence of Dr. Frank-n-Furter.",
        embedId: "3619420637734",
        genres: ["Horror","Comedy","Music"],
        source: "okru"
     },
     {
        title: "",
        description: "",
        embedId: "",
        genres: [""],
        source: "okru"
     },
     {
        title: "",
        description: "",
        embedId: "",
        genres: [""],
        source: "okru"
     },
     {
        title: "",
        description: "",
        embedId: "",
        genres: [""],
        source: "okru"
     },
     {
        title: "",
        description: "",
        embedId: "",
        genres: [""],
        source: "okru"
     },
     



]
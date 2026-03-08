-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 08, 2026 at 10:00 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `faceapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `facedata`
--

CREATE TABLE `facedata` (
                            `id` int(11) NOT NULL,
                            `username` varchar(255) DEFAULT NULL,
                            `descriptorArr` longtext DEFAULT NULL,
                            `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `facedata`
--

INSERT INTO `facedata` (`id`, `username`, `descriptorArr`, `password`) VALUES
                                                                           (46, 'Mary', NULL, '$2b$12$NLtWa2sTobmw3b0JC9eDMO2b8KOOYVJjdvAXXoaUv/47JWaM64xRu'),
                                                                           (51, 'Bella', NULL, '$2b$12$CSENh0D3D79PZfUC1tH/gu.k.BhwgQTqM8iaWy1HUPdltjCNkPMH2'),
                                                                           (52, 'Tina', NULL, '$2b$12$rCjNu7jiCY4hEDAIqCp9q..3i/cT6in0E5w9ihV5dfsN2WhLPkn3e'),
                                                                           (60, 'Amy', NULL, '$2b$12$8fApJ0T0use2fXNK4t2mz.JLSn/dkkucygmxSnpF6IdymvUQUfp5y'),
                                                                           (61, 'Steve', NULL, '$2b$12$5jhw4DOuvq/bgIfk01VBzOm2Th2fEXQblAMfsfM5mLWAqpOawQY4m'),
                                                                           (66, 'Aparna', '[-0.12863600254058838,0.1190803125500679,0.020156461745500565,-0.10991764068603516,-0.06032915785908699,0.04304521530866623,-0.052574437111616135,-0.15197785198688507,0.22538655996322632,-0.13866285979747772,0.18287964165210724,0.05949956923723221,-0.15536531805992126,-0.12092074006795883,0.03718148171901703,0.1460987627506256,-0.21507497131824493,-0.2096792757511139,-0.0513082891702652,-0.016648169606924057,-0.06921364367008209,-0.020358143374323845,0.09551878273487091,0.06194904446601868,-0.23985476791858673,-0.37707385420799255,-0.06982814520597458,-0.10962166637182236,0.03109349124133587,-0.03976965695619583,-0.014076313935220242,0.03621235117316246,-0.22194088995456696,-0.012270908802747726,0.06886330246925354,0.18574120104312897,-0.03888235241174698,-0.03810359910130501,0.14626581966876984,-0.04636227712035179,-0.23867960274219513,-0.08759491890668869,0.07761173695325851,0.22204497456550598,0.19444549083709717,0.017802126705646515,0.06480002403259277,-0.11207897961139679,0.1164512187242508,-0.2092539370059967,0.09040975570678711,0.08809878677129745,0.04834584891796112,0.01160622388124466,0.07722874730825424,-0.18936999142169952,-0.015486138872802258,0.12700070440769196,-0.15084214508533478,-0.02897837944328785,0.004032904747873545,0.01846443861722946,-0.07738948613405228,-0.044389110058546066,0.2582623362541199,0.19186605513095856,-0.13500304520130157,-0.15546198189258575,0.23930376768112183,-0.13560642302036285,0.006373691372573376,0.07570568472146988,-0.10038300603628159,-0.1760336309671402,-0.268132746219635,-0.07275658845901489,0.4209674298763275,0.12366550415754318,-0.12112994492053986,0.021146565675735474,-0.10527104884386063,0.009114140644669533,-0.02604570798575878,0.09820772707462311,-0.14139914512634277,0.0871000662446022,-0.04436352476477623,0.05494567006826401,0.21186327934265137,0.03805674612522125,-0.014870046637952328,0.13176506757736206,-0.013826923444867134,-0.0029506513383239508,0.05189427360892296,0.028833799064159393,-0.13547565042972565,-0.005651384126394987,-0.20540593564510345,-0.10015328973531723,0.003337175352498889,-0.013508394360542297,0.03611716628074646,0.1909407675266266,-0.22158926725387573,0.17851895093917847,0.03888421878218651,-0.04275679960846901,0.06798738241195679,0.09751750528812408,-0.04281165450811386,-0.12257441133260727,0.12858645617961884,-0.252092182636261,0.1450951099395752,0.16372177004814148,0.010678543709218502,0.19195209443569183,0.07538672536611557,0.10441076010465622,-0.017108092084527016,0.007846309803426266,-0.16020511090755463,-0.031462427228689194,0.014225122518837452,-0.08741986751556396,0.09410332143306732,0.014779900200664997]', NULL),
                                                                           (70, 'Tyler', '[-0.05804765969514847,0.10594172030687332,0.0590018667280674,-0.007134305313229561,-0.08952336758375168,-0.04712057486176491,-0.08293908834457397,-0.011490230448544025,0.12966720759868622,-0.03828708827495575,0.2315516173839569,-0.0010137135395780206,-0.25045058131217957,0.0008634362020529807,-0.028720054775476456,0.09192287921905518,-0.14735008776187897,-0.03663172945380211,-0.1532864272594452,-0.11423236131668091,0.04828621819615364,-0.015331274829804897,0.009076341055333614,-0.00908751506358385,-0.1249350979924202,-0.2776263654232025,-0.07719795405864716,-0.11770984530448914,0.08514751493930817,-0.17040015757083893,0.01846812665462494,0.013812393881380558,-0.12542109191417694,-0.0447051003575325,0.001525203580968082,0.01482676062732935,-0.003081330331042409,-0.0719248354434967,0.15079006552696228,-0.037489015609025955,-0.1468324512243271,-0.03328368812799454,-0.017540521919727325,0.2388712763786316,0.19036555290222168,0.07101095467805862,0.0233664121478796,-0.09164763987064362,0.05916003882884979,-0.293081134557724,0.00847280491143465,0.15044769644737244,0.014339827932417393,0.09977088868618011,0.10704854130744934,-0.17648783326148987,0.03340676799416542,0.09017214924097061,-0.14977583289146423,0.018511535599827766,0.007691807579249144,-0.07050434499979019,-0.047667842358350754,-0.1127079576253891,0.2063261866569519,0.10700150579214096,-0.08462178707122803,-0.10997848212718964,0.16352783143520355,-0.1566189080476761,0.005824010353535414,0.10242772847414017,-0.08072537928819656,-0.18517084419727325,-0.21790596842765808,0.0641433447599411,0.38269272446632385,0.18324902653694153,-0.14591863751411438,0.01710873283445835,-0.09448074549436569,-0.04407978802919388,0.024939488619565964,-0.01488744281232357,-0.11438971012830734,-0.004263515584170818,-0.052578382194042206,0.08028468489646912,0.1909821331501007,-0.0965936928987503,0.06642207503318787,0.19643716514110565,-0.03331214189529419,-0.0068313563242554665,0.012683453038334846,0.01407369039952755,-0.10948958992958069,0.02099652588367462,-0.07607227563858032,0.005317406263202429,0.14942073822021484,-0.14976434409618378,0.053898610174655914,0.07301870733499527,-0.17820049822330475,0.06793563067913055,-0.024894362315535545,-0.06888572871685028,0.030086776241660118,-0.004285544157028198,-0.08005478978157043,-0.04081934690475464,0.2560758888721466,-0.23795633018016815,0.24867938458919525,0.2388867288827896,0.025698112323880196,0.12137699872255325,0.0377463772892952,0.11504574120044708,-0.03661535680294037,-0.04302540794014931,-0.10976597666740417,-0.03531607240438461,0.010024541057646275,-0.035738565027713776,-0.06701157987117767,-0.0313565731048584]', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `feelings`
--

CREATE TABLE `feelings` (
                            `feeling_id` int(11) NOT NULL,
                            `mood` varchar(255) DEFAULT NULL,
                            `feeling_notes` varchar(800) DEFAULT NULL,
                            `post_time` varchar(255) DEFAULT NULL,
                            `title` varchar(255) DEFAULT NULL,
                            `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feelings`
--

INSERT INTO `feelings` (`feeling_id`, `mood`, `feeling_notes`, `post_time`, `title`, `user_id`) VALUES
                                                                                                    (18, 'Happy', 'Today was one of those rare days where everything seemed to fall into place. I managed to complete all my tasks at work without feeling rushed, and I even had some free time in the evening to enjoy a walk. It felt refreshing to breathe in the cool air and notice the little details around me that I usually overlook. Happiness feels so light and contagious, and I caught myself smiling at strangers without even realizing it.', '8/24/2025, 9:12:47 AM', 'everything aligned', 66),
                                                                                                    (19, 'Grateful', 'I am so grateful today for the small gestures of kindness I received. A colleague brought me coffee without asking, and my neighbor helped carry my groceries upstairs. It reminded me that gratitude isn’t about grand gestures but about noticing the everyday acts that add warmth to life. Writing this down makes me realize how many people I’m surrounded by who genuinely care, and that’s something I don’t ever want to take for granted.', '8/24/2025, 1:33:20 PM', 'small acts', 43),
                                                                                                    (20, 'Calm', 'Spent most of the evening reading while the rain poured outside. The sound of raindrops against the window created the perfect backdrop, and I felt a deep sense of calm wash over me. No urgency, no pressure, just being fully present in that moment. It made me think about how rare it is to give ourselves permission to just be still, and how nourishing such stillness can be for the mind and soul.', '8/24/2025, 8:55:42 PM', 'rainy evening', 63),
                                                                                                    (21, 'Anxious', 'The feeling of anxiety crept in today, especially when I thought about the deadlines coming up. My mind kept circling through “what if” scenarios, and even though I tried to distract myself, the unease stayed in the background. Writing this entry makes me realize how important it is to slow down, breathe, and break things into smaller steps. Anxiety has a way of magnifying problems, but reflection helps to put them back into perspective.', '8/25/2025, 10:14:59 AM', 'circling thoughts', 58),
                                                                                                    (22, 'Tired', 'Woke up exhausted and that sluggishness followed me through the entire day. Coffee didn’t seem to make much difference, and even though I got through my work, it felt like dragging my feet from one task to the next. There’s a heaviness in being tired that is not just physical but also emotional. All I can think about now is getting some real rest and hoping tomorrow feels lighter and more manageable.', '8/25/2025, 7:47:16 PM', 'worn out', 59),
                                                                                                    (23, 'Excited', 'Planning for the upcoming weekend trip has filled me with so much excitement. I caught myself daydreaming about the train ride, the laughter with friends, and the adventures waiting for us. Even though it’s still a few days away, just knowing something joyful is on the horizon makes the present moment brighter. Excitement has a way of fueling energy, and today I felt like I had an extra spark in everything I did.', '8/26/2025, 11:26:03 AM', 'trip ahead', 46),
                                                                                                    (24, 'Optimistic', 'Despite the challenges at work and the uncertainty hanging in the air, I feel surprisingly optimistic. There’s a quiet confidence inside me that things will eventually turn out better than I expect. It’s not blind positivity but a choice to trust the process and stay patient. Optimism, to me, feels like a light at the end of the tunnel, and I’m learning that even when the tunnel is long, it’s the belief in that light that keeps me moving forward.', '8/26/2025, 6:34:51 PM', 'light ahead', 61),
                                                                                                    (31, 'neww', 'newww', '1/20/2026, 3:53:06 PM', 'new ', 66);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `facedata`
--
ALTER TABLE `facedata`
    ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feelings`
--
ALTER TABLE `feelings`
    ADD PRIMARY KEY (`feeling_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `facedata`
--
ALTER TABLE `facedata`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `feelings`
--
ALTER TABLE `feelings`
    MODIFY `feeling_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

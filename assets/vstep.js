/* B1 Passport – Học liệu luyện theo định dạng VSTEP (Bậc 3–5), mức B1
   Nội dung biên soạn mới, mô phỏng CẤU TRÚC đề VSTEP; không sao chép từ sách/đề thi đã xuất bản. */
(() => {
const B = window.B1;

/* ============================ LISTENING (VSTEP) ============================ */
B.listening.push(
  {
    id: "vl1", vstep: true, title: "VSTEP Part 1 – Short announcements", topic: "Đời sống hằng ngày", mins: 15,
    type: "VSTEP Nghe Part 1 – 8 thông báo ngắn",
    desc: "Tám thông báo, tin nhắn và hướng dẫn ngắn. Mỗi đoạn có một câu hỏi – giống Part 1 của đề VSTEP.",
    vocab: [["boarding", "lên máy bay"], ["appointment", "cuộc hẹn"], ["checkout", "quầy thanh toán"], ["repairs", "việc sửa chữa"], ["road works", "công trình sửa đường"], ["register", "đăng ký"]],
    lines: [
      { s: "1 – Airport", t: "Number one. Attention please. Passengers on flight VN245 to Da Nang, please note that the departure gate has changed from gate twelve to gate eighteen. Boarding will begin at ten forty." },
      { s: "2 – Clinic", t: "Number two. Hello, this is Bright Smile Dental Clinic calling for Ms Hoa. Your appointment on Thursday has been moved to Friday at the same time, two thirty. Please call us back if this is not convenient." },
      { s: "3 – Supermarket", t: "Number three. Good evening, shoppers. The store will close in fifteen minutes. Please take your items to the checkout. And don't forget, all bread and cakes are half price until closing time." },
      { s: "4 – Teacher", t: "Number four. For next Monday, please read chapter four and answer questions one to five. You don't need to write the summary. We'll do that together in class." },
      { s: "5 – Weather", t: "Number five. Tomorrow will start cloudy in the north, with heavy rain arriving in the afternoon. In the south, it will stay dry and sunny, with temperatures reaching thirty-four degrees." },
      { s: "6 – Museum", t: "Number six. Welcome to the City Museum. Today the second floor is closed for repairs. The café on the ground floor is open as usual, and our guided tour starts at eleven from the main entrance." },
      { s: "7 – Bus", t: "Number seven. This is the number eight bus to the university. Because of road works on Le Loi Street, we will not stop at the central post office today. Passengers for the post office should get off at the next stop." },
      { s: "8 – Radio advert", t: "Number eight. Want to improve your English this summer? Sunshine Language Centre offers evening classes from the fifth of June. Register before the end of May and get a free textbook." }
    ],
    questions: [
      { type: "mc", q: "1. What has changed for flight VN245?", o: ["The destination", "The departure gate", "The boarding time"], a: 1, e: "Cổng đổi từ 12 sang 18; giờ lên máy bay vẫn là 10:40." },
      { type: "mc", q: "2. When is Ms Hoa's new appointment?", o: ["Thursday at 2:30", "Friday at 2:30", "Friday at 3:30"], a: 1, e: "“moved to Friday at the same time, two thirty”." },
      { type: "mc", q: "3. What is half price?", o: ["Fruit and vegetables", "Bread and cakes", "All drinks"], a: 1, e: "“all bread and cakes are half price”." },
      { type: "mc", q: "4. What should students NOT do at home?", o: ["Read chapter four", "Answer questions one to five", "Write the summary"], a: 2, e: "“You don't need to write the summary.”" },
      { type: "mc", q: "5. What will the weather be like in the south tomorrow?", o: ["Rainy in the afternoon", "Dry and sunny", "Cloudy and cool"], a: 1, e: "“In the south, it will stay dry and sunny”." },
      { type: "mc", q: "6. Where does the guided tour start?", o: ["On the second floor", "In the café", "At the main entrance"], a: 2, e: "“starts at eleven from the main entrance”." },
      { type: "mc", q: "7. Why won't the bus stop at the post office?", o: ["There are road works", "There has been an accident", "The bus is full"], a: 0, e: "“Because of road works on Le Loi Street”." },
      { type: "mc", q: "8. What do students get if they register before the end of May?", o: ["A discount", "A free textbook", "A free trial lesson"], a: 1, e: "“Register before the end of May and get a free textbook.”" }
    ]
  },
  {
    id: "vl2", vstep: true, title: "VSTEP Part 2 – Conversations", topic: "Học tập & Mua sắm", mins: 15,
    type: "VSTEP Nghe Part 2 – Hội thoại",
    desc: "Hai đoạn hội thoại: hai sinh viên hẹn làm bài thuyết trình, và một khách hàng đổi áo khoác. Mỗi đoạn 4 câu hỏi.",
    vocab: [["renewable energy", "năng lượng tái tạo"], ["due", "đến hạn"], ["receipt", "hóa đơn"], ["refund", "hoàn tiền"], ["sold out", "bán hết"], ["voucher", "phiếu giảm giá"]],
    lines: [
      { s: "Nam", t: "Conversation one. Linh, have you started on the presentation about renewable energy? It's due next Wednesday." },
      { s: "Linh", t: "I've found some information on solar power, but I haven't made any slides yet. What about you?" },
      { s: "Nam", t: "I've done the part on wind energy. I think we should meet to put everything together. Are you free on Saturday morning?" },
      { s: "Linh", t: "On Saturday morning I work at the bookshop. How about Saturday afternoon, at the library?" },
      { s: "Nam", t: "The library closes at three on Saturdays. Let's meet at the café opposite the library instead. It has good Wi-Fi." },
      { s: "Linh", t: "Fine. Two o'clock, then. Should we ask Minh to join us? He's good at designing slides." },
      { s: "Nam", t: "Good idea. I'll text him tonight. And could you bring your laptop? Mine is being repaired." },
      { s: "Linh", t: "No problem." },
      { s: "Assistant", t: "Conversation two. Good morning. Can I help you?" },
      { s: "Customer", t: "Yes, I bought this jacket here last week, but when I got home I noticed that the zip doesn't work properly." },
      { s: "Assistant", t: "I'm sorry about that. Do you have the receipt?" },
      { s: "Customer", t: "Yes, here it is." },
      { s: "Assistant", t: "Thank you. Would you like to exchange it, or would you prefer a refund?" },
      { s: "Customer", t: "Actually, I'd like the same jacket in a different colour, if you have it. The blue one, maybe." },
      { s: "Assistant", t: "Let me check. I'm afraid we've sold out of blue in your size. We have it in black or green." },
      { s: "Customer", t: "Hmm. Then I'll take the green one." },
      { s: "Assistant", t: "Certainly. And because of the problem, we can give you a ten percent discount voucher for your next visit." },
      { s: "Customer", t: "That's very kind. Thank you." }
    ],
    questions: [
      { type: "mc", q: "Conversation 1 – What is the presentation about?", o: ["Climate change", "Renewable energy", "Saving water"], a: 1, e: "“the presentation about renewable energy”." },
      { type: "mc", q: "Why can't Linh meet on Saturday morning?", o: ["She has a class", "She works at a bookshop", "She is visiting her family"], a: 1, e: "“On Saturday morning I work at the bookshop.”" },
      { type: "mc", q: "Where will they meet?", o: ["In the library", "At Nam's house", "In a café opposite the library"], a: 2, e: "Thư viện đóng cửa lúc 3 giờ → gặp ở quán cà phê đối diện." },
      { type: "mc", q: "Why does Nam ask Linh to bring her laptop?", o: ["His laptop is being repaired", "Her laptop is faster", "The café has no computers"], a: 0, e: "“Mine is being repaired.”" },
      { type: "mc", q: "Conversation 2 – What is wrong with the jacket?", o: ["It is the wrong size", "The zip doesn't work", "It has a hole"], a: 1, e: "“the zip doesn't work properly”." },
      { type: "mc", q: "What does the customer want at first?", o: ["Her money back", "The same jacket in another colour", "A different jacket"], a: 1, e: "“the same jacket in a different colour… The blue one”." },
      { type: "mc", q: "Which jacket does the customer finally take?", o: ["Blue", "Black", "Green"], a: 2, e: "Hết màu xanh dương → khách chọn màu xanh lá (green)." },
      { type: "mc", q: "What does the shop offer because of the problem?", o: ["Free delivery", "A 10% discount voucher", "A free scarf"], a: 1, e: "“a ten percent discount voucher for your next visit”." }
    ]
  },
  {
    id: "vl3", vstep: true, title: "VSTEP Part 3 – A short talk: urban gardens", topic: "Môi trường & Đô thị", mins: 15,
    type: "VSTEP Nghe Part 3 – Bài nói/ bài giảng",
    desc: "Một đoạn bài giảng ngắn về vườn rau đô thị: khái niệm, lợi ích và thách thức.",
    vocab: [["herb", "rau thơm"], ["rooftop", "sân thượng"], ["harmful chemicals", "hóa chất độc hại"], ["transport", "vận chuyển"], ["community", "cộng đồng"], ["soil", "đất trồng"]],
    lines: [
      { s: "Lecturer", t: "Good morning, everyone. Today I'd like to talk about urban gardens, a trend that has become popular in many cities around the world." },
      { s: "Lecturer", t: "An urban garden is simply a space in a city where people grow food, such as vegetables, herbs or fruit. It can be on a rooftop, on a balcony, or on a small piece of empty land." },
      { s: "Lecturer", t: "So why are urban gardens becoming so popular? The first reason is health. People who grow their own vegetables usually eat more of them, and they know that no harmful chemicals have been used." },
      { s: "Lecturer", t: "The second reason is the environment. Plants help to cool the air in hot cities, and food that is grown locally does not need to be transported over long distances." },
      { s: "Lecturer", t: "The third reason, which surprises many people, is social. Community gardens bring neighbours together. People who have lived on the same street for years without speaking often become friends while working in the garden." },
      { s: "Lecturer", t: "Of course, there are challenges. Space in cities is limited and expensive, and gardens need regular care. In some cases, the soil in cities may also be polluted, so it needs to be tested before people plant food in it." },
      { s: "Lecturer", t: "In our next session, we'll look at some examples of successful rooftop gardens in Asian cities." }
    ],
    questions: [
      { type: "mc", q: "What is the talk mainly about?", o: ["How to cook vegetables", "Gardens where people grow food in cities", "Parks in Asian cities"], a: 1, e: "Chủ đề: “urban gardens… where people grow food”." },
      { type: "mc", q: "Which place is NOT mentioned as a possible urban garden?", o: ["A rooftop", "A balcony", "A school playground"], a: 2, e: "Chỉ nhắc rooftop, balcony, empty land." },
      { type: "mc", q: "According to the speaker, how do urban gardens help the environment?", o: ["They cool the air and reduce transport", "They produce clean water", "They reduce noise"], a: 0, e: "“cool the air… does not need to be transported over long distances”." },
      { type: "mc", q: "Which reason surprises many people?", o: ["The health reason", "The economic reason", "The social reason"], a: 2, e: "“The third reason, which surprises many people, is social.”" },
      { type: "gap", q: "Before planting food, city soil may need to be ___ because it can be polluted.", a: ["tested"], e: "“it needs to be tested before people plant food in it”." },
      { type: "mc", q: "What will the next session be about?", o: ["Problems with city soil", "Examples of rooftop gardens in Asian cities", "How to start a community garden"], a: 1, e: "“examples of successful rooftop gardens in Asian cities”." }
    ]
  }
);

/* ============================ READING (VSTEP) ============================ */
B.reading.push(
  {
    id: "vr1", vstep: true, title: "Gap years: time out or time well spent?", topic: "Giáo dục", mins: 20,
    type: "VSTEP Đọc – 10 câu hỏi", source: "Bài đọc biên soạn theo định dạng VSTEP",
    text: [
      "In many countries, it is common for young people to take a “gap year” – a break of several months to a year between finishing secondary school and starting university. During this time, they might travel, work, {volunteer|làm tình nguyện} or learn a new skill. While the idea is popular in Britain and Australia, it is still relatively new in Vietnam, where most students go straight from high school to university.",
      "Supporters of gap years argue that the experience helps young people to {mature|trưởng thành}. Living away from home, managing money and dealing with unexpected problems all build confidence and independence. Many universities also report that students who have taken a gap year are more {motivated|có động lực} when they finally begin their studies, because they have had time to think carefully about what they really want to do.",
      "However, a gap year is not without risks. It can be expensive, especially if it involves international travel, and not every family can {afford|đủ khả năng chi trả} it. Some students also find it difficult to return to studying after a long break; they lose the habit of reading and writing regularly. In addition, a gap year that is poorly planned can easily turn into a year of sleeping late and playing video games.",
      "The key, experts say, is planning. A successful gap year usually has clear goals, such as saving a certain amount of money, reaching a particular level in a foreign language or completing a volunteer project. Students should also keep in touch with their future university and make sure that their place will still be {available|còn trống, sẵn có} when they return.",
      "For students who cannot take a whole year off, there are {alternatives|lựa chọn thay thế}. Summer volunteer programmes, short courses or part-time jobs can offer some of the same benefits without the cost and the long break. In the end, what matters is not how long the experience lasts, but what young people learn from it."
    ],
    questions: [
      { type: "mc", q: "What is the passage mainly about?", o: ["Why Vietnamese students should study abroad", "The benefits and risks of gap years and how to make them successful", "How universities choose new students", "Popular travel destinations for young people"], a: 1, e: "Bài nêu ưu điểm (đoạn 2), rủi ro (đoạn 3), cách làm hiệu quả (đoạn 4–5)." },
      { type: "mc", q: "According to paragraph 1, gap years in Vietnam are…", o: ["very popular", "not allowed", "still relatively new", "only for rich families"], a: 2, e: "“it is still relatively new in Vietnam”." },
      { type: "mc", q: "The word “mature” in paragraph 2 is closest in meaning to…", o: ["become more adult in behaviour", "travel a lot", "earn more money", "feel tired"], a: 0, e: "mature = trưởng thành, cư xử chín chắn hơn." },
      { type: "mc", q: "Why are students who took a gap year often more motivated?", o: ["They have more money", "They have thought about what they really want", "They have better exam results", "Their parents push them"], a: 1, e: "“they have had time to think carefully about what they really want to do”." },
      { type: "mc", q: "Which of the following is NOT mentioned as a risk of a gap year?", o: ["The cost", "Difficulty returning to study", "Poor planning", "Health problems"], a: 3, e: "Đoạn 3 không nhắc đến vấn đề sức khỏe." },
      { type: "mc", q: "The word “it” in “not every family can afford it” (paragraph 3) refers to…", o: ["international travel", "a gap year", "the habit of reading", "university"], a: 1, e: "“it” = a gap year (chi phí cho một năm nghỉ)." },
      { type: "mc", q: "According to experts, a successful gap year usually…", o: ["lasts exactly twelve months", "has clear goals", "involves travelling abroad", "is organised by a university"], a: 1, e: "“A successful gap year usually has clear goals”." },
      { type: "mc", q: "Students should keep in touch with their future university in order to…", o: ["get a scholarship", "make sure their place is still available", "choose a new major", "find a part-time job"], a: 1, e: "“make sure that their place will still be available”." },
      { type: "mc", q: "What is the purpose of the last paragraph?", o: ["To criticise gap years", "To suggest alternatives to a full gap year", "To describe a student's experience", "To compare Britain and Vietnam"], a: 1, e: "Đoạn 5 gợi ý các lựa chọn thay thế: tình nguyện hè, khóa học ngắn, việc làm thêm." },
      { type: "mc", q: "The writer's attitude towards gap years can best be described as…", o: ["strongly negative", "completely positive", "balanced", "uninterested"], a: 2, e: "Tác giả trình bày cả lợi ích lẫn rủi ro → cân bằng." }
    ]
  },
  {
    id: "vr2", vstep: true, title: "Libraries in the digital age", topic: "Xã hội", mins: 20,
    type: "VSTEP Đọc – 10 câu hỏi", source: "Bài đọc biên soạn theo định dạng VSTEP",
    text: [
      "When the internet became part of everyday life, many people predicted that public libraries would soon disappear. Why would anyone walk to a library when millions of books and articles were available online at the click of a button? Yet today, libraries in many countries are busier than ever, although the way people use them has changed {considerably|đáng kể}.",
      "First of all, libraries have become important places for people who do not have good internet access at home. Visitors use library computers to apply for jobs, fill in government forms or join online classes. For these people, the library is not a {luxury|thứ xa xỉ} but a {necessity|nhu cầu thiết yếu}.",
      "Secondly, libraries now offer much more than books. Many run free {workshops|buổi hội thảo thực hành} on topics such as computer skills, cooking or starting a small business. Some lend out unusual items, from musical instruments to gardening tools. Children's reading clubs and homework help sessions are also very popular, especially with working parents.",
      "Thirdly, libraries provide something that is increasingly rare in modern cities: a quiet, free public space. Unlike cafés or shopping centres, a library does not expect visitors to spend money. Students come to study, elderly people come to read the newspaper, and {freelancers|người làm việc tự do} come to work. This makes the library one of the few places where people of all ages and backgrounds meet.",
      "Of course, libraries face serious challenges. {Budgets|ngân sách} have been cut in many places, and some smaller branches have closed. Librarians also need new skills, as they are now expected to help visitors with technology as well as with finding books. Nevertheless, the libraries that have {adapted|thích nghi} to these changes show that, far from being out of date, they can play a central role in their communities."
    ],
    questions: [
      { type: "mc", q: "According to paragraph 1, what did many people predict?", o: ["Libraries would become busier", "Libraries would soon disappear", "Books would become cheaper", "The internet would be banned"], a: 1, e: "“many people predicted that public libraries would soon disappear”." },
      { type: "mc", q: "The word “considerably” in paragraph 1 is closest in meaning to…", o: ["slightly", "a lot", "quickly", "recently"], a: 1, e: "considerably = đáng kể, nhiều." },
      { type: "mc", q: "Why is the library a necessity for some people?", o: ["They do not have good internet access at home", "They cannot buy books", "They need a place to sleep", "They work in the library"], a: 0, e: "Đoạn 2: người không có internet tốt ở nhà." },
      { type: "mc", q: "Which item is NOT mentioned as something libraries may lend?", o: ["Musical instruments", "Gardening tools", "Books", "Bicycles"], a: 3, e: "Không nhắc đến xe đạp." },
      { type: "mc", q: "Homework help sessions are especially popular with…", o: ["elderly people", "freelancers", "working parents", "librarians"], a: 2, e: "“especially with working parents”." },
      { type: "mc", q: "How are libraries different from cafés and shopping centres?", o: ["They are noisier", "Visitors do not have to spend money", "They open later", "They sell food"], a: 1, e: "“a library does not expect visitors to spend money”." },
      { type: "mc", q: "The word “This” in paragraph 4 refers to…", o: ["the fact that the library is a free space used by many different people", "reading the newspaper", "working as a freelancer", "the price of coffee"], a: 0, e: "“This” chỉ việc thư viện là không gian miễn phí cho mọi người cùng sử dụng." },
      { type: "mc", q: "Which challenge for libraries is mentioned in paragraph 5?", o: ["Too many visitors", "Budget cuts", "Lack of books", "Noise"], a: 1, e: "“Budgets have been cut in many places”." },
      { type: "mc", q: "It can be inferred from paragraph 5 that librarians today…", o: ["only help people find books", "need to help with technology too", "are paid more than before", "no longer work in small branches"], a: 1, e: "“help visitors with technology as well as with finding books”." },
      { type: "mc", q: "Which is the best title for the passage?", o: ["The End of Public Libraries", "Libraries: Changing with the Times", "How to Use the Internet", "Free Workshops for Children"], a: 1, e: "Ý chính: thư viện thay đổi để thích nghi và vẫn giữ vai trò trung tâm." }
    ]
  },
  {
    id: "vr3", vstep: true, title: "Why we put things off", topic: "Tâm lý & Học tập", mins: 20,
    type: "VSTEP Đọc – 10 câu hỏi", source: "Bài đọc biên soạn theo định dạng VSTEP",
    text: [
      "Almost everyone has done it: you have an important task to finish, but instead you check your phone, tidy your desk or watch “just one more” video. This habit of delaying tasks is called {procrastination|sự trì hoãn}, and it affects students and workers alike.",
      "Many people believe that procrastinators are simply lazy, but psychologists disagree. Research suggests that procrastination is often linked to emotions rather than to poor time management. When a task makes us feel bored, {anxious|lo lắng} or unsure of ourselves, we avoid it in order to feel better in the short term. Unfortunately, the {relief|cảm giác nhẹ nhõm} does not last, and the task becomes even more stressful as the deadline gets closer.",
      "{Perfectionism|chủ nghĩa cầu toàn} can also play a role. People who are afraid of making mistakes sometimes delay starting a task because they worry that the result will not be good enough. {Ironically|trớ trêu thay}, by waiting until the last minute, they often produce work of a lower quality than they could have.",
      "So what can be done? One popular method is to break a large task into small, specific steps. “Write my essay” feels {overwhelming|quá sức, choáng ngợp}, but “write the first paragraph” seems possible. Another technique is to work for a short, fixed period – for example, twenty-five minutes – and then take a short break. Removing {distractions|những thứ gây xao nhãng}, such as turning off phone notifications, also makes a big difference.",
      "Finally, experts recommend being kind to yourself. One study found that students who forgave themselves for procrastinating before one exam were less likely to procrastinate before the next. Feeling guilty, it seems, only makes the problem worse."
    ],
    questions: [
      { type: "mc", q: "What is the main purpose of the passage?", o: ["To describe a study about exams", "To explain why people procrastinate and how to deal with it", "To criticise lazy students", "To advertise a time-management app"], a: 1, e: "Bài giải thích nguyên nhân (đoạn 2–3) và đưa ra giải pháp (đoạn 4–5)." },
      { type: "mc", q: "According to psychologists, procrastination is often linked to…", o: ["laziness", "emotions", "intelligence", "age"], a: 1, e: "“often linked to emotions rather than to poor time management”." },
      { type: "mc", q: "The word “relief” in paragraph 2 is closest in meaning to…", o: ["a feeling of comfort when worry goes away", "a kind of reward", "a type of stress", "a long holiday"], a: 0, e: "relief = cảm giác nhẹ nhõm." },
      { type: "mc", q: "Why do some perfectionists delay starting a task?", o: ["They have too much free time", "They are afraid the result will not be good enough", "They do not understand the task", "They prefer working in groups"], a: 1, e: "“they worry that the result will not be good enough”." },
      { type: "mc", q: "The word “Ironically” in paragraph 3 suggests that…", o: ["the result is the opposite of what they want", "the result is funny", "the task is easy", "they work very fast"], a: 0, e: "Họ muốn làm tốt nhưng chờ đến phút chót lại làm kém hơn – trái với mong muốn." },
      { type: "mc", q: "The example “write the first paragraph” is used to illustrate…", o: ["working for 25 minutes", "breaking a big task into small steps", "removing distractions", "forgiving yourself"], a: 1, e: "Ví dụ cho việc chia nhỏ công việc." },
      { type: "mc", q: "Which strategy is NOT mentioned in paragraph 4?", o: ["Dividing tasks into small steps", "Working for a fixed period", "Turning off notifications", "Studying with a partner"], a: 3, e: "Không nhắc đến học cùng bạn." },
      { type: "mc", q: "What did the study in paragraph 5 find?", o: ["Students who forgave themselves procrastinated less next time", "Guilty students got higher marks", "Exams cause procrastination", "Most students never procrastinate"], a: 0, e: "“less likely to procrastinate before the next”." },
      { type: "mc", q: "What can be inferred from paragraph 2?", o: ["Avoiding a task makes it more stressful later", "Bored people never finish tasks", "Deadlines reduce stress", "Time management is not important"], a: 0, e: "“the task becomes even more stressful as the deadline gets closer”." },
      { type: "mc", q: "The tone of the passage is best described as…", o: ["angry", "informative and practical", "humorous", "sad"], a: 1, e: "Bài cung cấp thông tin và lời khuyên thực tế." }
    ]
  }
);

/* ============================ WRITING (VSTEP) ============================ */
const letterChecks = (formal) => [
  { re: "^\\s*(dear|hi|hello)\\b", f: "im", label: "Có lời chào mở đầu" },
  formal
    ? { re: "(yours faithfully|yours sincerely|kind regards|best regards)", f: "i", label: "Kết thư trang trọng (Yours sincerely/ faithfully…)" }
    : { re: "(best wishes|love|take care|see you|cheers|all the best|regards)", f: "i", label: "Có câu kết thư" },
  { re: "(i am writing|i'm writing|thanks for|thank you for|it was (great|nice|lovely))", f: "i", label: "Câu mở đầu nêu lý do viết thư/ đáp lại thư" },
  { re: "(look forward|let me know|write back|hope to hear|hear from you)", f: "i", label: "Có câu chờ hồi âm" }
];
const essayChecks = [
  { re: "(in my opinion|i (strongly )?(agree|disagree|believe|think)|this essay|personally)", f: "i", label: "Mở bài nêu rõ quan điểm/ hướng bài viết" },
  { re: "(firstly|first of all|to begin with|the first)", f: "i", label: "Có ý thứ nhất được đánh dấu rõ (Firstly…)" },
  { re: "(secondly|another|in addition|furthermore|moreover)", f: "i", label: "Có ý thứ hai/ bổ sung" },
  { re: "(for example|for instance|such as)", f: "i", label: "Có ví dụ minh họa" },
  { re: "(in conclusion|to conclude|to sum up|all in all|overall)", f: "i", label: "Có đoạn kết luận" }
];
B.writing.push(
  {
    id: "vw1", vstep: true, title: "VSTEP Task 1 – Advice to a visiting friend", topic: "Du lịch", mins: 20, paras: 3,
    type: "VSTEP Viết Task 1 – Thư thân mật", min: 120, max: 170,
    prompt: "You received an email from your English friend, Mark:\n“I'm planning to spend two weeks in Vietnam next July! Which places should I visit? What should I pack? And what's the best way to travel around the country?”\nWrite a reply to Mark. You should write at least 120 words.",
    notes: ["Thank Mark and react to his news", "Recommend places to visit", "Advise him what to pack", "Suggest how to travel around"],
    outline: ["Lời chào + cảm ơn, bày tỏ vui mừng", "Đoạn 1: gợi ý 2 địa điểm + lý do", "Đoạn 2: nên mang gì (thời tiết tháng 7)", "Đoạn 3: phương tiện di chuyển", "Đề nghị giúp đỡ + câu kết"],
    language: ["Thanks for your email.", "It's great news that…", "If I were you, I would…", "You should definitely…", "Don't forget to pack…", "The best way to… is…", "Let me know if…", "Best wishes,"],
    checks: letterChecks(false),
    model: "Hi Mark,\n\nThanks for your email. It's great news that you're coming to Vietnam in July!\n\nIf I were you, I would spend a few days in Hanoi and then go to Ha Long Bay. Hanoi is full of history and amazing street food, while Ha Long Bay is famous for its beautiful islands. After that, you could fly south to Hoi An, an old town with lovely lanterns and tailors.\n\nJuly is very hot and it often rains, so don't forget to pack light clothes, a raincoat and plenty of sun cream. A hat and comfortable sandals are also a good idea.\n\nThe best way to travel long distances is by plane, because domestic flights are cheap and fast. In the cities, you can use ride-hailing apps.\n\nLet me know your plans and I'll show you around Hanoi!\n\nBest wishes,\nLan"
  },
  {
    id: "vw2", vstep: true, title: "VSTEP Task 1 – Applying for a part-time job", topic: "Việc làm", mins: 20, paras: 3,
    type: "VSTEP Viết Task 1 – Thư trang trọng", min: 120, max: 170,
    prompt: "You saw this advertisement on a website:\n“GREEN TRAVEL is looking for part-time English-speaking tour assistants for the summer. Weekends only. Please write to Ms Smith, explaining why you are suitable.”\nWrite a letter of application. You should write at least 120 words.",
    notes: ["Say which job you are applying for and where you saw it", "Describe your skills and experience", "Say when you are available", "Ask one question about the job"],
    outline: ["Dear Ms Smith,", "Lý do viết thư + nguồn thông tin", "Kỹ năng, kinh nghiệm phù hợp", "Thời gian có thể làm việc", "Câu hỏi + mong hồi âm", "Yours sincerely, + họ tên"],
    language: ["I am writing to apply for the position of…", "I saw your advertisement on…", "I have experience in…", "I am confident that…", "I am available…", "I would be grateful if you could tell me…", "I look forward to hearing from you.", "Yours sincerely,"],
    checks: [...letterChecks(true), { re: "^(?![\\s\\S]*\\b\\w+(n't|'m|'re|'ve|'ll)\\b)", f: "i", label: "Tránh viết tắt trong thư trang trọng" }],
    model: "Dear Ms Smith,\n\nI am writing to apply for the position of part-time tour assistant which I saw advertised on your website.\n\nI am a second-year student of tourism at Vinh University, and I believe I have the right skills for this job. My English is at B1 level, and I have practised it by volunteering as a guide for international visitors at our local museum. I am friendly, organised and I enjoy working with people from different cultures.\n\nI am available every Saturday and Sunday from June to August. I can also work on public holidays if necessary.\n\nI would be grateful if you could tell me whether training is provided before the summer begins.\n\nI look forward to hearing from you.\n\nYours sincerely,\nNguyen Thi Mai"
  },
  {
    id: "vw3", vstep: true, title: "VSTEP Task 1 – Apologising for missing a party", topic: "Bạn bè", mins: 20, paras: 3,
    type: "VSTEP Viết Task 1 – Thư thân mật", min: 120, max: 170,
    prompt: "Your English friend, Anna, invited you to her birthday party last Saturday, but you could not go.\nWrite an email to Anna. In your email:\n• apologise for not going\n• explain why you could not go\n• suggest a way to celebrate together soon.\nYou should write at least 120 words.",
    notes: ["Apologise", "Explain the reason", "Suggest meeting to celebrate", "Ask about the party"],
    outline: ["Lời chào + lời xin lỗi chân thành", "Giải thích lý do cụ thể", "Hỏi thăm về bữa tiệc", "Đề xuất gặp mặt ăn mừng (thời gian, địa điểm)", "Câu kết"],
    language: ["I'm really sorry that…", "Unfortunately, …", "I hope you understand.", "How was the party?", "Why don't we…?", "It's my treat!", "Let me know when you're free.", "Take care,"],
    checks: [...letterChecks(false), { re: "(sorry|apologi[sz]e)", f: "i", label: "Có lời xin lỗi" }],
    model: "Hi Anna,\n\nI'm really sorry that I couldn't come to your birthday party last Saturday. I was really looking forward to it.\n\nUnfortunately, my grandmother was taken to hospital on Friday evening, so I had to travel back to my hometown to help my parents look after her. She is much better now, so please don't worry.\n\nHow was the party? I saw some photos online and it looked amazing. I hope you got lots of lovely presents!\n\nI'd love to celebrate with you. Why don't we have dinner at that new Italian restaurant near the university next weekend? It's my treat! After that, we could go to the cinema if you like.\n\nLet me know when you're free.\n\nTake care,\nMinh"
  },
  {
    id: "vw4", vstep: true, title: "VSTEP Task 1 – Suggestions to a sports centre", topic: "Sức khỏe & Cộng đồng", mins: 20, paras: 3,
    type: "VSTEP Viết Task 1 – Thư trang trọng", min: 120, max: 170,
    prompt: "You are a member of a local sports centre. The manager has asked members for ideas to improve the centre.\nWrite a letter to the manager. In your letter:\n• say what you like about the centre\n• describe two problems\n• suggest some improvements.\nYou should write at least 120 words.",
    notes: ["Say what you like", "Describe two problems", "Suggest improvements", "Formal style"],
    outline: ["Dear Sir or Madam,", "Lý do viết thư (phản hồi lời mời góp ý)", "Điểm tốt của trung tâm", "Hai vấn đề cụ thể", "Đề xuất cải thiện", "Yours faithfully,"],
    language: ["I am writing in response to…", "I have been a member for…", "What I particularly like is…", "However, there are a few problems.", "Firstly, … Secondly, …", "It would be a good idea to…", "I hope you will consider…", "Yours faithfully,"],
    checks: [...letterChecks(true), { re: "(suggest|it would be|could you|should|recommend)", f: "i", label: "Có đề xuất cải thiện" }],
    model: "Dear Sir or Madam,\n\nI am writing in response to your request for members' ideas to improve the sports centre.\n\nI have been a member for two years, and what I particularly like is the friendly staff and the clean swimming pool. The prices are also very reasonable.\n\nHowever, there are a few problems. Firstly, the gym is extremely crowded in the evenings, so members often have to wait a long time to use the machines. Secondly, the changing rooms do not have enough lockers, which means people have to leave their bags on the floor.\n\nI would suggest opening the gym earlier in the morning so that more people can come before work. It would also be a good idea to install more lockers.\n\nI hope you will consider these suggestions.\n\nYours faithfully,\nTran Van Hung"
  },
  {
    id: "ve1", vstep: true, title: "VSTEP Task 2 – Part-time jobs for students", topic: "Giáo dục & Việc làm", mins: 40, paras: 4,
    type: "VSTEP Viết Task 2 – Bài luận quan điểm", min: 250, max: 320,
    prompt: "Write an essay to an educated reader on the following topic:\n“Some people think that university students should have a part-time job while they are studying. To what extent do you agree or disagree?”\nInclude reasons and relevant examples. You should write at least 250 words.",
    notes: ["Introduction with a clear opinion", "Two body paragraphs with reasons", "Examples from your experience or knowledge", "Conclusion that restates your opinion"],
    outline: ["Mở bài: giới thiệu chủ đề + quan điểm (đồng ý phần lớn)", "Thân bài 1: lợi ích – kinh nghiệm, kỹ năng, tiền", "Thân bài 2: nhượng bộ – nguy cơ ảnh hưởng học tập + cách khắc phục", "Kết bài: nhắc lại quan điểm"],
    language: ["Nowadays, it is increasingly common for…", "I largely agree that…", "Firstly, …", "For example, …", "Secondly, …", "On the other hand, …", "However, this problem can be solved if…", "In conclusion, …"],
    checks: essayChecks,
    model: "Nowadays, it is increasingly common for university students in Vietnam to work part-time while they study. Although a job can sometimes take time away from studying, I largely agree that it is beneficial for most students.\n\nFirstly, a part-time job helps students gain practical experience and skills that they cannot learn in the classroom. For example, a student who works as a waiter learns how to communicate with customers, solve problems quickly and work as part of a team. These soft skills are highly valued by employers, so working students often find it easier to get a job after graduation. In addition, earning their own money teaches young people how to manage a budget and reduces the financial pressure on their families.\n\nOn the other hand, some people argue that working can have a negative effect on students' academic results. If students work long hours, they may feel tired in class and have less time to prepare for exams. However, this problem can be solved if students choose flexible jobs and limit their working hours to around ten or fifteen hours a week. Many universities also offer part-time positions on campus, such as library assistant, which fit well with class timetables.\n\nIn conclusion, I believe that having a part-time job is a valuable experience for university students, as long as they manage their time carefully. A job should support their education, not replace it."
  },
  {
    id: "ve2", vstep: true, title: "VSTEP Task 2 – Online shopping", topic: "Công nghệ & Mua sắm", mins: 40, paras: 4,
    type: "VSTEP Viết Task 2 – Ưu điểm/ nhược điểm", min: 250, max: 320,
    prompt: "Write an essay to an educated reader on the following topic:\n“Nowadays more and more people prefer to shop online rather than in traditional shops. What are the advantages and disadvantages of online shopping?”\nInclude reasons and relevant examples. You should write at least 250 words.",
    notes: ["Introduce the topic", "One paragraph on advantages", "One paragraph on disadvantages", "Conclusion with your overall view"],
    outline: ["Mở bài: xu hướng mua sắm trực tuyến + nội dung bài", "Thân bài 1: ưu điểm – tiện lợi, so sánh giá, nhiều lựa chọn", "Thân bài 2: nhược điểm – không thử được, hàng kém chất lượng, rủi ro thông tin", "Kết bài: đánh giá chung + lời khuyên"],
    language: ["In recent years, …", "This essay will discuss…", "The main advantage is that…", "What is more, …", "However, online shopping also has some drawbacks.", "For instance, …", "As a result, …", "Overall, …"],
    checks: [{ re: "(advantage|benefit)", f: "i", label: "Có bàn về ưu điểm" }, { re: "(disadvantage|drawback|problem)", f: "i", label: "Có bàn về nhược điểm" }, ...essayChecks.slice(1)],
    model: "In recent years, shopping online has become part of daily life for millions of people, especially young people in cities. This essay will discuss the main advantages and disadvantages of this trend.\n\nThe main advantage of online shopping is convenience. Customers can buy almost anything, from clothes to electronics, at any time of the day without leaving their homes. This is particularly useful for busy workers and people who live far from shopping centres. What is more, online shops make it easy to compare prices and read reviews from other buyers, so customers can often find cheaper products and make better choices. Many websites also offer special discounts during sales events.\n\nHowever, online shopping also has some drawbacks. Firstly, customers cannot see, touch or try on products before buying them. For instance, a pair of shoes may look perfect in a photo but turn out to be the wrong size or poor quality. As a result, people sometimes waste time returning goods. Secondly, shopping online can be risky, because some fake websites steal customers' personal and bank information. Finally, the ease of clicking “buy” may encourage people to spend more money than they really need to.\n\nOverall, I believe that the advantages of online shopping outweigh the disadvantages, provided that customers are careful. They should buy from well-known websites, read reviews and think twice before making a purchase."
  },
  {
    id: "ve3", vstep: true, title: "VSTEP Task 2 – Moving from the countryside to cities", topic: "Xã hội", mins: 40, paras: 4,
    type: "VSTEP Viết Task 2 – Nguyên nhân & hệ quả", min: 250, max: 320,
    prompt: "Write an essay to an educated reader on the following topic:\n“Many young people are leaving the countryside to live and work in big cities. What are the reasons for this, and what problems does it cause?”\nInclude reasons and relevant examples. You should write at least 250 words.",
    notes: ["Introduce the situation", "Explain the main reasons", "Describe the problems for cities and villages", "Conclude, possibly with a solution"],
    outline: ["Mở bài: hiện tượng di cư ra thành phố", "Thân bài 1: nguyên nhân – việc làm, thu nhập, giáo dục, giải trí", "Thân bài 2: hệ quả – quá tải đô thị, nông thôn thiếu lao động trẻ", "Kết bài: tóm tắt + giải pháp ngắn"],
    language: ["There are several reasons why…", "The most important reason is…", "Another reason is that…", "This leads to…", "As a consequence, …", "Meanwhile, in rural areas, …", "To solve this problem, …", "In conclusion, …"],
    checks: [{ re: "(reason|because|due to)", f: "i", label: "Có giải thích nguyên nhân" }, { re: "(problem|consequence|lead to|leads to|result)", f: "i", label: "Có nêu hệ quả/ vấn đề" }, ...essayChecks.slice(1)],
    model: "In Vietnam, as in many developing countries, a growing number of young people are leaving their villages to live in big cities such as Hanoi and Ho Chi Minh City. This essay will examine the reasons for this trend and the problems it creates.\n\nThere are several reasons why young people move to cities. The most important reason is work. Cities have many factories, offices and service businesses, so it is much easier to find a job with a higher salary than in the countryside, where most work is still in farming. Another reason is education: the best universities and training centres are located in big cities. In addition, many young people are attracted by the modern lifestyle, with shopping centres, cafés and entertainment.\n\nHowever, this movement causes problems for both cities and villages. In cities, the population grows faster than housing and transport systems can handle. This leads to traffic jams, air pollution and high rents, and many newcomers have to live in small, crowded rooms. Meanwhile, in rural areas, there are fewer young workers to farm the land, and many elderly people are left alone. As a consequence, some villages are slowly losing their traditional way of life.\n\nIn conclusion, young people move to cities mainly for better jobs, education and lifestyles, but this creates pressure on cities and leaves villages behind. To solve this problem, the government should invest more in rural industries and services, so that young people have good reasons to stay at home."
  },
  {
    id: "ve4", vstep: true, title: "VSTEP Task 2 – Public transport or new roads?", topic: "Giao thông", mins: 40, paras: 4,
    type: "VSTEP Viết Task 2 – Thảo luận hai quan điểm", min: 250, max: 320,
    prompt: "Write an essay to an educated reader on the following topic:\n“Some people believe that governments should spend more money on public transport, while others think that building new roads is more important. Discuss both views and give your own opinion.”\nInclude reasons and relevant examples. You should write at least 250 words.",
    notes: ["Introduce both views", "One paragraph for each view", "Give your own opinion clearly", "Conclusion"],
    outline: ["Mở bài: giới thiệu hai quan điểm + ý kiến của bạn", "Thân bài 1: lý do ủng hộ xây đường mới", "Thân bài 2: lý do ủng hộ giao thông công cộng (quan điểm của bạn)", "Kết bài: khẳng định lại quan điểm"],
    language: ["Some people argue that…", "Others believe that…", "Supporters of this view claim that…", "It is true that…", "Nevertheless, …", "In my view, …", "A good example is…", "In conclusion, …"],
    checks: [{ re: "(some people|others|on the one hand|supporters)", f: "i", label: "Trình bày cả hai quan điểm" }, ...essayChecks],
    model: "Traffic congestion is one of the biggest problems in modern cities. Some people believe that the best solution is to build more roads, while others think that governments should invest in public transport. In my opinion, public transport deserves more money.\n\nSupporters of building new roads argue that roads are necessary for economic development. New highways allow goods to be transported quickly between cities and ports, and they make travel easier for people living in rural areas. It is true that in many regions, poor roads are still a serious obstacle to growth, so some road building is clearly needed.\n\nNevertheless, I believe that public transport is the better long-term investment, especially in big cities. Firstly, new roads in cities often fill up with more cars within a few years, so traffic jams soon return. Secondly, buses, metro lines and trains can carry far more people using less space and producing less pollution than private cars and motorbikes. A good example is Singapore, where an efficient metro system and well-organised bus network allow millions of people to travel quickly every day. In addition, cheap public transport helps students and low-income workers, who cannot afford their own vehicles.\n\nIn conclusion, although new roads are still important for connecting regions, I believe governments should spend more on public transport in cities. It is a more effective, fairer and greener way to solve the problem of traffic."
  }
);

/* ============================ SPEAKING (VSTEP) ============================ */
B.speaking.push(
  { id: "vsp1", vstep: true, custom: "p1", title: "VSTEP Part 1 – Social interaction", topic: "14 chủ đề quen thuộc", mins: 15, type: "VSTEP Nói Part 1 – Tương tác xã hội", desc: "Trả lời 3 câu hỏi cho mỗi chủ đề, 20–30 giây mỗi câu. Máy đọc câu hỏi và bấm giờ." },
  { id: "vsp2", vstep: true, custom: "p2", title: "VSTEP Part 2 – Solution discussion", topic: "12 tình huống", mins: 15, type: "VSTEP Nói Part 2 – Thảo luận giải pháp", desc: "Chọn 1 trong 3 phương án, giải thích lý do và vì sao không chọn hai phương án còn lại." },
  { id: "vsp3", vstep: true, custom: "p3", title: "VSTEP Part 3 – Topic development", topic: "12 chủ đề có sơ đồ ý", mins: 20, type: "VSTEP Nói Part 3 – Phát triển chủ đề", desc: "Phát triển chủ đề theo sơ đồ tư duy có sẵn và ý riêng, sau đó trả lời câu hỏi mở rộng." },
  { id: "vsmock", vstep: true, custom: "mock", title: "VSTEP Speaking mock test (12 minutes)", topic: "Thi thử đủ 3 phần", mins: 15, type: "VSTEP Nói – Thi thử", desc: "Mô phỏng bài thi nói: Part 1 → Part 2 → Part 3, tự động bấm giờ, ghi âm toàn bộ và tự đánh giá." }
);

B.vstepSpeaking = {
  part1: [
    { topic: "Your hometown", qs: ["Where is your hometown?", "What do you like most about it?", "How has your hometown changed in recent years?"] },
    { topic: "Free time", qs: ["What do you usually do in your free time?", "Do you prefer spending your free time alone or with other people? Why?", "Is there a new hobby you would like to try?"] },
    { topic: "Food and eating habits", qs: ["What is your favourite food?", "How often do you eat out?", "Do you think people in your country eat healthily?"] },
    { topic: "School and studying", qs: ["Which subject did you enjoy most at school? Why?", "Tell me about a teacher you remember well.", "Do you prefer studying alone or in a group?"] },
    { topic: "Transport", qs: ["How do you usually travel to work or school?", "Is public transport good where you live?", "What would you change about traffic in your city?"] },
    { topic: "Clothes", qs: ["What kind of clothes do you usually wear?", "Do you follow fashion trends?", "Do you think students should wear uniforms?"] },
    { topic: "Keeping fit", qs: ["What do you do to stay healthy?", "How often do you do sport or exercise?", "Is it easy to keep fit when you are busy?"] },
    { topic: "Your neighbourhood", qs: ["Can you describe your neighbourhood?", "How well do you know your neighbours?", "What facilities would you like to have near your home?"] },
    { topic: "Work", qs: ["What job do you do, or what job would you like to do?", "In your opinion, what makes a good boss?", "Would you prefer to work in an office or from home?"] },
    { topic: "Technology", qs: ["How often do you use your smartphone?", "Which app do you use most? Why?", "Has technology made our lives better?"] },
    { topic: "Music and entertainment", qs: ["What kind of music do you like?", "Do you prefer watching films at home or at the cinema?", "Did you learn to play a musical instrument as a child?"] },
    { topic: "Travel", qs: ["Where did you go on your last holiday?", "Do you prefer travelling in Vietnam or abroad?", "What do you like to take photos of when you travel?"] },
    { topic: "Shopping", qs: ["Do you enjoy shopping? Why or why not?", "Do you prefer shopping online or in shops?", "What was the last thing you bought?"] },
    { topic: "Friends", qs: ["How often do you meet your friends?", "What do you usually do together?", "What qualities make a good friend?"] }
  ],
  starters: ["Well, to be honest, …", "Actually, I'd say that…", "The main reason is that…", "For example, …", "I usually… but sometimes…", "If I had the chance, I would…"],
  part2: [
    { sit: "Your best friend is going abroad to study for four years. You want to give him/her a present. Which is the best choice?", options: ["A photo album of your memories", "A Vietnamese silk scarf", "A travel guidebook"], ideas: [["meaningful, reminds him/her of you", "heavy to carry, may not have space"], ["light, easy to pack, shows Vietnamese culture", "may not be useful in a hot country"], ["practical information about the new country", "information is easy to find online"]],
      model: "In this situation, I think a photo album of our memories is the best present. Firstly, it is very meaningful. When my friend feels homesick, he can look at the photos and remember the happy times we spent together. Secondly, I can design it myself and write short notes next to the photos, so it will be a unique gift that nobody else can give. Some people might say that an album is heavy, but I can make a small one with only our favourite pictures. I wouldn't choose a silk scarf because my friend is going to Australia, where it is warm most of the year, so he probably wouldn't wear it. A travel guidebook is useful, but nowadays he can find all that information on the internet for free. So, for me, the photo album is clearly the best choice." },
    { sit: "A first-year student is deciding where to live while studying at university. Which option is the best?", options: ["Living in the university dormitory", "Renting a flat with friends", "Living with relatives in the city"], ideas: [["cheap, safe, close to classes", "crowded, noisy, little privacy"], ["freedom, own space, can cook", "more expensive, need to manage everything"], ["almost free, family support", "less freedom, may be far from university"]] },
    { sit: "You want to improve your English speaking skills. Which is the best way?", options: ["Joining an English club", "Taking a course at a language centre", "Talking to foreign tourists in the city centre"], ideas: [["cheap, many chances to speak", "nobody corrects your mistakes"], ["experienced teachers, clear progress", "expensive, fixed timetable"], ["free, real communication", "tourists may be busy, only simple topics"]],
      model: "If I want to improve my speaking, I would choose to take a course at a language centre. The most important reason is that I can learn from experienced teachers. They can correct my pronunciation and grammar mistakes, which I can't do by myself. In addition, a course has a clear plan, so I can see my progress week by week and stay motivated. It is true that courses can be expensive, but many centres offer discounts for students, and I think it is a good investment for my future. An English club is cheaper, but it is often noisy and nobody checks whether I am speaking correctly. Talking to tourists sounds interesting, but they are usually busy sightseeing, and we can only talk about simple topics like the weather. That's why I think a language course is the most effective option." },
    { sit: "Your class wants to organise an activity at the end of the school year. Which is the best choice?", options: ["A party at a restaurant", "A one-day picnic in the countryside", "A two-day trip to the beach"], ideas: [["easy to organise, everyone can come", "not very special, little time to talk"], ["fresh air, outdoor games, not too expensive", "depends on the weather"], ["memorable, lots of time together", "expensive, some parents may not agree"]],
      model: "I think a one-day picnic in the countryside is the best choice for our class. First of all, it is not too expensive, so everyone in the class can afford to join. Secondly, we can play outdoor games, cook together and take lots of photos, which will create wonderful memories before we say goodbye. Someone might worry about the weather, but we can check the forecast and choose a place with a shelter, just in case it rains. A restaurant party is easier to organise, but it is just like a normal dinner and we wouldn't have much time to talk or play together. A two-day trip to the beach would be fun, but it costs a lot, and some parents might not allow their children to stay overnight. So the picnic is the most suitable option." },
    { sit: "Your school has some money to improve one facility. Which should it choose?", options: ["The library", "The canteen", "The science laboratory"], ideas: [["many students use it, old books need replacing", "students can find information online"], ["healthier food, comfortable place to relax", "canteen was renovated recently"], ["better practical lessons", "only some students use it"]] },
    { sit: "You want a part-time job this summer. Which job is the best for you?", options: ["Assistant tour guide", "Waiter or waitress in a café", "Online tutor for children"], ideas: [["practise English, travel, meet people", "tiring, long hours"], ["easy to find, flexible shifts", "low pay, standing all day"], ["work from home, use your knowledge", "need patience, internet problems"]] },
    { sit: "Your younger sister received lucky money at Tet. What should she do with it?", options: ["Buy whatever she wants", "Save it in a bank account", "Buy books and school supplies"], ideas: [["she feels happy, learns to choose", "may waste it on sweets or games"], ["learns to save for the future", "the amount is small"], ["useful for her studies", "she may feel it's not really her money"]] },
    { sit: "Your class wants to keep memories of graduation day. What is the best way?", options: ["A class photo book", "A class video", "A collection of short writings by classmates"], ideas: [["easy, everyone can keep a copy", "printing costs"], ["lively, includes voices and music", "needs editing skills"], ["personal messages, meaningful", "takes time, some people dislike writing"]] },
    { sit: "Your friend spends too much time playing online games. What should you do?", options: ["Talk to him directly", "Talk to his parents", "Invite him to join a sports club with you"], ideas: [["friends listen to friends", "he may get angry"], ["parents can control his time", "he may feel betrayed"], ["healthy new hobby, spend time together", "he may not like sport"]] },
    { sit: "Your school is deciding on a uniform policy. Which option do you prefer?", options: ["Wearing uniforms every day", "Wearing uniforms two days a week", "No uniforms at all"], ideas: [["equal, saves time choosing clothes", "boring, may be uncomfortable"], ["balance between rules and freedom", "still need to buy both"], ["comfort, show personality", "competition over expensive clothes"]] },
    { sit: "You are planning a Saturday evening with your friends. Where should you go?", options: ["A quiet café", "A night market", "The cinema"], ideas: [["easy to chat, relaxing", "may be boring"], ["street food, lively atmosphere", "crowded, noisy"], ["new films, fun experience", "can't talk, tickets are expensive"]] },
    { sit: "You have saved some money. How should you use it?", options: ["Buy a new laptop", "Take a short course", "Travel with your family"], ideas: [["useful for study and work", "your old one still works"], ["new skills for your career", "need time"], ["family time, rest, new places", "money is gone quickly"]],
      model: "If I had saved some money, I would use it to take a short course, for example a course in graphic design or English for work. The main reason is that new skills can help me get a better job in the future, so the money will actually come back to me. In addition, a course would help me meet people with similar interests and build my network. Of course, a course needs time, but many centres offer evening and weekend classes, so I can study after work. Buying a new laptop is not necessary because my old one still works well. Travelling with my family is a lovely idea, but the money would be gone in just a few days, and we can travel together during the Tet holiday anyway. So, I think the course is the most sensible choice." }
  ],
  frame: ["In this situation, I think … is the best choice.", "The first reason is that…", "Another advantage is that…", "Some people might say that…, but…", "I wouldn't choose … because…", "As for…, although…, …", "So, all things considered, …"],
  part3: [
    { topic: "Learning to play a musical instrument is good for children.", ideas: ["develops patience and discipline", "helps them relax and reduce stress", "helps them discover their talents"], follow: ["Should music be a compulsory subject at school?", "Which instrument is the most popular in your country?", "Is it better to start learning music as a child or as an adult?"],
      model: "I strongly believe that learning to play a musical instrument is very good for children, for three main reasons. Firstly, it develops patience and discipline. To play well, children have to practise a little every day for months, so they learn that success needs hard work. For example, when I learned the guitar at ten, I almost gave up, but practising every evening taught me not to quit easily. Secondly, music helps children relax. These days, students have a lot of pressure from homework and exams, and playing an instrument is a healthy way to forget their worries for a while. Thirdly, learning music can help children discover their talents. Some may find that they love performing and later become professional musicians. In addition, I think playing music with others helps children make friends. In conclusion, learning an instrument brings both personal and social benefits to children." },
    { topic: "Living in the countryside has many advantages.", ideas: ["fresh air and a quiet environment", "lower cost of living", "friendly, close community"], follow: ["What are the disadvantages of living in the countryside?", "Why do many young people move to cities?", "Would you like to live in the countryside when you are older?"] },
    { topic: "Reading books is better than watching TV.", ideas: ["develops imagination", "improves vocabulary and concentration", "readers are active, not passive"], follow: ["What kind of books do young people like today?", "Are e-books as good as printed books?", "How can parents encourage children to read?"] },
    { topic: "University students should take soft-skills courses.", ideas: ["teamwork", "communication and presentation skills", "problem-solving for future jobs"], follow: ["Which soft skill is the most important? Why?", "Should universities make these courses compulsory?", "Can soft skills be learned through part-time jobs?"] },
    { topic: "Supermarkets are more convenient than traditional markets.", ideas: ["wide range of products in one place", "long opening hours", "clear prices and good hygiene"], follow: ["Why do many people still go to traditional markets?", "Will traditional markets disappear in the future?", "Do you prefer shopping in supermarkets or markets?"] },
    { topic: "Trees are very important for cities.", ideas: ["cleaner air", "cooler temperatures in summer", "better mental health and places to relax"], follow: ["What can people do to protect trees?", "Should cities stop cutting down trees for new roads?", "Is your city green enough?"] },
    { topic: "People should use public transport more often.", ideas: ["less traffic congestion", "less air pollution", "cheaper than private vehicles"], follow: ["Why do many people still prefer motorbikes?", "How can the government make public transport more attractive?", "Should cars be banned from city centres?"],
      model: "In my opinion, people should definitely use public transport more often, and I'd like to talk about three main benefits. The first one is less traffic congestion. One bus can carry around forty passengers, which takes many motorbikes and cars off the road. If more people took the bus, rush hours would be much less stressful. The second benefit is less air pollution. Big cities like Hanoi often have very poor air quality, and vehicle fumes are one of the main causes, so using public transport helps to protect our health. Thirdly, it is cheaper. A monthly bus pass costs much less than petrol, parking and repairs. Apart from that, I think travelling by bus or metro is safer than riding a motorbike in heavy traffic. Of course, the system needs to improve, for example with more routes and more punctual buses. But overall, I believe public transport is the smartest way to travel in a modern city." },
    { topic: "Having a part-time job is useful for university students.", ideas: ["earn money and become independent", "gain work experience", "learn time management"], follow: ["What kinds of part-time jobs are popular with students?", "Can part-time jobs affect students' studies?", "At what age should young people start working?"] },
    { topic: "Social media has a strong influence on young people.", ideas: ["keeping in touch with friends", "access to news and learning", "risks: addiction and fake news"], follow: ["How much time do you spend on social media?", "Should children under 13 use social media?", "How can young people recognise fake news?"] },
    { topic: "Learning English opens up many opportunities.", ideas: ["better job opportunities", "chances to study abroad", "access to knowledge and entertainment"], follow: ["What is the most difficult part of learning English?", "Should children start learning English in kindergarten?", "Will translation apps make learning languages unnecessary?"] },
    { topic: "Travelling is a good way to learn.", ideas: ["learning about other cultures", "becoming more independent", "practising foreign languages"], follow: ["Is it better to travel alone or in a group?", "What can schools do to help students travel and learn?", "Does tourism have any negative effects?"] },
    { topic: "Online learning has many benefits.", ideas: ["flexible time and place", "saves travel time and money", "many free resources"], follow: ["What are the disadvantages of online learning?", "Can online learning replace traditional classrooms?", "What do you need to be a successful online learner?"] }
  ],
  p3lang: ["I'd like to talk about…", "There are three main reasons why…", "The first point is…", "For example, from my own experience, …", "Moving on to the second point, …", "Apart from that, I think…", "In conclusion, …"]
};

/* Ngữ pháp bổ sung (dùng trong bài kiểm tra) */
B.grammar.push(
  { q: "She ___ to London three times so far this year.", o: ["went", "has been", "had gone", "is going"], a: 1, e: "“so far” → hiện tại hoàn thành; has been to = đã từng đến." },
  { q: "The man ___ car was stolen called the police.", o: ["who", "which", "whose", "whom"], a: 2, e: "whose + danh từ (sở hữu)." },
  { q: "It's too cold ___ swimming today.", o: ["for go", "to go", "going", "go"], a: 1, e: "too + adj + to V." },
  { q: "He suggested ___ a taxi because it was raining.", o: ["to take", "taking", "take", "took"], a: 1, e: "suggest + V-ing." },
  { q: "If you heat ice, it ___.", o: ["melts", "will melted", "would melt", "melted"], a: 0, e: "Câu điều kiện loại 0 – sự thật hiển nhiên." },
  { q: "I'm not used ___ in such a big city.", o: ["live", "to live", "to living", "living"], a: 2, e: "be used to + V-ing." },
  { q: "The film was ___ boring that we left early.", o: ["such", "so", "too", "very"], a: 1, e: "so + adj + that." },
  { q: "My brother is good ___ fixing computers.", o: ["in", "on", "at", "for"], a: 2, e: "good at + V-ing." },
  { q: "They ___ the project by the end of next week.", o: ["will have finished", "have finished", "finished", "are finish"], a: 0, e: "by + mốc tương lai → tương lai hoàn thành." },
  { q: "Although it was raining, ___.", o: ["but we went out", "we went out", "so we went out", "however we went out"], a: 1, e: "Although không dùng với but/so trong cùng câu." },
  { q: "She told me that she ___ the book the week before.", o: ["reads", "has read", "had read", "will read"], a: 2, e: "Câu gián tiếp: quá khứ đơn → quá khứ hoàn thành." },
  { q: "There isn't ___ milk left in the fridge.", o: ["many", "any", "some", "a few"], a: 1, e: "Câu phủ định với danh từ không đếm được → any." },
  { q: "The new students ___ to the head teacher tomorrow.", o: ["will introduce", "will be introduced", "are introducing", "introduced"], a: 1, e: "Bị động tương lai: will be + V3." },
  { q: "I'd rather ___ at home tonight.", o: ["stay", "to stay", "staying", "stayed"], a: 0, e: "would rather + V nguyên mẫu." },
  { q: "He apologised ___ late.", o: ["to be", "for being", "of being", "about be"], a: 1, e: "apologise for + V-ing." },
  { q: "This is the ___ interesting book I have ever read.", o: ["more", "most", "much", "very"], a: 1, e: "So sánh nhất tính từ dài + have ever V3." },
  { q: "You ___ bring food; lunch is provided.", o: ["mustn't", "don't need to", "can't", "should"], a: 1, e: "don't need to = không cần (không bắt buộc)." },
  { q: "I haven't seen him ___ last summer.", o: ["for", "since", "ago", "during"], a: 1, e: "since + mốc thời gian." },
  { q: "Unless you hurry, you ___ the bus.", o: ["miss", "will miss", "missed", "would miss"], a: 1, e: "Unless = if not; câu điều kiện loại 1." },
  { q: "The children were made ___ their rooms.", o: ["tidy", "to tidy", "tidying", "tidied"], a: 1, e: "Bị động của make sb do sth: be made to V." }
);

/* Lộ trình mở rộng: luyện theo định dạng VSTEP */
B.plan.push(
  { week: "Tuần 5", focus: "VSTEP – Làm quen định dạng", items: ["vl1", "vr1", "vsp1", "vw1", "vw2"] },
  { week: "Tuần 6", focus: "VSTEP – Thảo luận & thư", items: ["vl2", "vr2", "vsp2", "vw3", "ve1", "ve2"] },
  { week: "Tuần 7", focus: "VSTEP – Bài luận & thi thử", items: ["vl3", "vr3", "vsp3", "vw4", "ve3", "ve4", "vsmock"] }
);
})();

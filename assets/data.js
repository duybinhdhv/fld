/* B1 Passport – Học liệu tiếng Anh trình độ B1 (CEFR)
   Toàn bộ nội dung do tác giả biên soạn. Có thể chỉnh sửa/ thêm bài trực tiếp trong file này.
   Cú pháp từ vựng trong bài đọc: {word|nghĩa tiếng Việt}
   Dạng câu hỏi: mc (trắc nghiệm), tf (True/False/Not Given), gap (điền từ) */
window.B1 = {
  skills: {
    listening: {
      name: "Nghe", en: "Listening", color: "var(--c-l)",
      intro: "Nghe hội thoại và độc thoại về các chủ đề quen thuộc, nắm ý chính và thông tin chi tiết.",
      cando: [
        "Hiểu ý chính của lời nói rõ ràng về công việc, trường học, giải trí.",
        "Nắm được thông tin chi tiết: thời gian, giá cả, địa điểm, số liệu.",
        "Hiểu chương trình radio/ phỏng vấn khi người nói nói tương đối chậm và rõ."
      ]
    },
    speaking: {
      name: "Nói", en: "Speaking", color: "var(--c-s)",
      intro: "Luyện phát âm bằng nhận diện giọng nói, luyện nói theo thẻ chủ đề có bấm giờ và tự đánh giá theo tiêu chí B1.",
      cando: [
        "Giới thiệu bản thân, mô tả thói quen, trải nghiệm và kế hoạch.",
        "Mô tả tranh, so sánh và đưa ra gợi ý khi thảo luận.",
        "Trình bày và giải thích ngắn gọn quan điểm cá nhân."
      ]
    },
    reading: {
      name: "Đọc", en: "Reading", color: "var(--c-r)",
      intro: "Đọc blog, bài báo, thông báo ngắn; tra nghĩa từ ngay trong bài và làm câu hỏi có giải thích.",
      cando: [
        "Hiểu văn bản dùng ngôn ngữ thường ngày hoặc liên quan đến công việc.",
        "Hiểu mô tả sự kiện, cảm xúc và mong muốn trong thư/ blog cá nhân.",
        "Tìm thông tin cụ thể trong thông báo, tin nhắn, nhãn sản phẩm."
      ]
    },
    writing: {
      name: "Viết", en: "Writing", color: "var(--c-w)",
      intro: "Viết email, bài báo, truyện ngắn với dàn ý, ngôn ngữ mẫu, đếm từ, bấm giờ và nhận xét tự động.",
      cando: [
        "Viết email/ thư cá nhân kể trải nghiệm, đưa ra gợi ý.",
        "Viết đoạn văn mạch lạc nêu quan điểm có lý do và ví dụ.",
        "Viết thư trang trọng đơn giản để phàn nàn hoặc yêu cầu."
      ]
    }
  },

  /* ============================ LISTENING ============================ */
  listening: [
    {
      id: "l1", title: "Booking a weekend trip", topic: "Du lịch", mins: 15,
      type: "Hội thoại – Đặt tour",
      desc: "Một khách hàng gọi điện cho công ty du lịch để đặt chuyến đi cuối tuần.",
      vocab: [["discount", "giảm giá"], ["include", "bao gồm"], ["cruise", "du thuyền"], ["kayaking", "chèo thuyền kayak"], ["offer", "ưu đãi"]],
      lines: [
        { s: "Agent", t: "Good morning, Sunrise Travel. How can I help you?" },
        { s: "Customer", t: "Hi. I'm looking for a weekend trip for two people, somewhere near the sea." },
        { s: "Agent", t: "Sure. We have a great offer for Ha Long Bay. It's two nights on a cruise boat, leaving on Friday evening and coming back on Sunday afternoon." },
        { s: "Customer", t: "That sounds lovely. How much does it cost?" },
        { s: "Agent", t: "It's normally four and a half million dong per person, but this month there's a twenty percent discount, so it's three point six million." },
        { s: "Customer", t: "Does that include meals?" },
        { s: "Agent", t: "Yes, breakfast and dinner are included. Lunch isn't, but you can buy it on the boat." },
        { s: "Customer", t: "OK. And what activities are there?" },
        { s: "Agent", t: "You can go kayaking and visit a cave, and there's a cooking class on Saturday evening." },
        { s: "Customer", t: "Perfect. Can I pay by credit card?" },
        { s: "Agent", t: "Of course. I just need your full name and a phone number." }
      ],
      questions: [
        { type: "mc", q: "Where does the customer want to go?", o: ["To the mountains", "Somewhere near the sea", "To a big city"], a: 1, e: "Customer: “somewhere near the sea”." },
        { type: "mc", q: "When does the trip start?", o: ["Friday evening", "Saturday morning", "Sunday afternoon"], a: 0, e: "“leaving on Friday evening and coming back on Sunday afternoon”." },
        { type: "mc", q: "How much is the trip per person this month?", o: ["4.5 million dong", "3.6 million dong", "2 million dong"], a: 1, e: "Giảm 20% từ 4,5 triệu → 3,6 triệu." },
        { type: "mc", q: "Which meal is NOT included?", o: ["Breakfast", "Lunch", "Dinner"], a: 1, e: "“Lunch isn't, but you can buy it on the boat.”" },
        { type: "gap", q: "On Saturday evening there is a ___ class.", a: ["cooking"], e: "“there's a cooking class on Saturday evening”." },
        { type: "mc", q: "How will the customer pay?", o: ["In cash", "By bank transfer", "By credit card"], a: 2, e: "“Can I pay by credit card?” – “Of course.”" }
      ]
    },
    {
      id: "l2", title: "A voicemail from a colleague", topic: "Công việc", mins: 12,
      type: "Độc thoại – Tin nhắn thoại",
      desc: "Tom để lại tin nhắn thoại cho Mai về cuộc họp với khách hàng ngày mai.",
      vocab: [["client", "khách hàng"], ["delayed", "bị hoãn, trễ"], ["projector", "máy chiếu"], ["copy", "bản sao"], ["downstairs", "tầng dưới"]],
      lines: [
        { s: "Tom", t: "Hi Mai, it's Tom from the marketing team." },
        { s: "Tom", t: "I'm calling about tomorrow's meeting with the new clients." },
        { s: "Tom", t: "It was planned for nine o'clock, but they've asked to move it to half past ten because their flight is delayed." },
        { s: "Tom", t: "Also, we won't use meeting room two because the projector is broken, so we'll be in room five on the third floor." },
        { s: "Tom", t: "Could you print twenty copies of the report and bring them with you?" },
        { s: "Tom", t: "Oh, and please don't forget to order coffee and some cakes. The café downstairs needs to know by five p.m. today." },
        { s: "Tom", t: "Call me back if you have any questions. Thanks!" }
      ],
      questions: [
        { type: "gap", q: "Tom works in the ___ team.", a: ["marketing"], e: "“it's Tom from the marketing team”." },
        { type: "mc", q: "What is the new time of the meeting?", o: ["9:00", "10:00", "10:30"], a: 2, e: "“move it to half past ten” = 10:30." },
        { type: "mc", q: "Why has the meeting time changed?", o: ["The clients' flight is delayed", "Tom is ill", "The room is not ready"], a: 0, e: "“because their flight is delayed”." },
        { type: "mc", q: "Where will the meeting be?", o: ["Room 2, second floor", "Room 5, third floor", "In the café downstairs"], a: 1, e: "Phòng 2 hỏng máy chiếu → “room five on the third floor”." },
        { type: "gap", q: "Mai should print ___ copies of the report. (viết bằng số)", a: ["20", "twenty"], e: "“print twenty copies of the report”." },
        { type: "mc", q: "By when must Mai order the coffee and cakes?", o: ["Tomorrow morning", "5 p.m. today", "Before the meeting starts"], a: 1, e: "“needs to know by five p.m. today”." }
      ]
    },
    {
      id: "l3", title: "Healthy habits – a radio interview", topic: "Sức khỏe", mins: 15,
      type: "Phỏng vấn radio",
      desc: "Người dẫn chương trình phỏng vấn bác sĩ Lan về thói quen sống khỏe.",
      vocab: [["common", "phổ biến"], ["realistic", "thực tế"], ["processed food", "thực phẩm chế biến sẵn"], ["recommend", "khuyên, đề xuất"], ["fall asleep", "ngủ thiếp đi"]],
      lines: [
        { s: "Host", t: "Welcome back to Morning Talk. Today we're talking to Doctor Lan, a doctor and fitness expert. Doctor Lan, what's the most common mistake people make about health?" },
        { s: "Dr Lan", t: "I think many people believe they need to do a lot of exercise at the gym. Actually, the most important thing is to move every day. Walking for thirty minutes is already very good for your heart." },
        { s: "Host", t: "What about sleep?" },
        { s: "Dr Lan", t: "Sleep is often forgotten. Adults need seven to nine hours a night. If you use your phone in bed, the blue light makes it harder to fall asleep, so I recommend putting it away one hour before bedtime." },
        { s: "Host", t: "And food? Do we need to stop eating sugar completely?" },
        { s: "Dr Lan", t: "No, that's not realistic. My advice is to eat less processed food and to drink more water instead of soft drinks. Small changes are easier to keep." },
        { s: "Host", t: "Thank you, Doctor Lan. That's really useful advice." }
      ],
      questions: [
        { type: "mc", q: "According to Dr Lan, what is the most common mistake?", o: ["Eating too much sugar", "Thinking you need a lot of exercise at the gym", "Sleeping too much"], a: 1, e: "“many people believe they need to do a lot of exercise at the gym”." },
        { type: "gap", q: "Walking for ___ minutes a day is good for your heart. (viết bằng số)", a: ["30", "thirty"], e: "“Walking for thirty minutes…”." },
        { type: "mc", q: "How many hours of sleep do adults need?", o: ["5–6 hours", "7–9 hours", "10 hours"], a: 1, e: "“Adults need seven to nine hours a night.”" },
        { type: "mc", q: "What does she advise about phones?", o: ["Turn the screen brightness down", "Put the phone away one hour before bedtime", "Only use it in the morning"], a: 1, e: "“putting it away one hour before bedtime”." },
        { type: "mc", q: "What does she say about sugar?", o: ["Stop eating it completely", "It is not realistic to stop completely", "Eat it only at weekends"], a: 1, e: "“No, that's not realistic.”" },
        { type: "mc", q: "Why does she recommend small changes?", o: ["They are cheaper", "They are easier to keep", "Doctors prefer them"], a: 1, e: "“Small changes are easier to keep.”" }
      ]
    },
    {
      id: "l4", title: "Tour of an eco-friendly school", topic: "Môi trường", mins: 15,
      type: "Độc thoại – Hướng dẫn tham quan",
      desc: "Minh, một học sinh, giới thiệu cách trường mình bảo vệ môi trường.",
      vocab: [["solar panel", "tấm pin mặt trời"], ["install", "lắp đặt"], ["canteen", "căng-tin"], ["look after", "chăm sóc"], ["competition", "cuộc thi"]],
      lines: [
        { s: "Minh", t: "Hello everyone and welcome to Green Valley School." },
        { s: "Minh", t: "My name is Minh and I'm going to show you how our school protects the environment." },
        { s: "Minh", t: "First, look at the roof. Those are solar panels. They were installed three years ago, and now they produce about forty percent of the electricity we use." },
        { s: "Minh", t: "Next, here in the canteen, we don't use plastic bottles any more. Every student brings their own water bottle, and there are free water fountains on every floor." },
        { s: "Minh", t: "Behind the canteen is our school garden. Each class looks after a small area and grows vegetables, which are later used in school lunches." },
        { s: "Minh", t: "Finally, we have a recycling competition every month. The class that collects the most paper and cans wins a trip to the national park." },
        { s: "Minh", t: "Last month, my class won! Now, let's go and see the garden." }
      ],
      questions: [
        { type: "mc", q: "When were the solar panels installed?", o: ["Last year", "Three years ago", "Forty years ago"], a: 1, e: "“They were installed three years ago”." },
        { type: "gap", q: "The solar panels produce about ___ percent of the school's electricity. (viết bằng số)", a: ["40", "forty"], e: "“about forty percent”." },
        { type: "mc", q: "What is NOT used in the canteen?", o: ["Water fountains", "Plastic bottles", "Vegetables from the garden"], a: 1, e: "“we don't use plastic bottles any more”." },
        { type: "mc", q: "What happens to the vegetables from the garden?", o: ["They are sold", "They are used in school lunches", "Students take them home"], a: 1, e: "“later used in school lunches”." },
        { type: "mc", q: "What is the prize in the recycling competition?", o: ["A trip to the national park", "New water bottles", "Free lunches"], a: 0, e: "“wins a trip to the national park”." },
        { type: "mc", q: "Who won the competition last month?", o: ["Every class", "Minh's class", "The teachers"], a: 1, e: "“Last month, my class won!”" }
      ]
    }
  ],

  /* ============================ SPEAKING ============================ */
  speaking: [
    {
      id: "s1", title: "Talking about your daily routine", topic: "Bản thân", mins: 20,
      type: "Phỏng vấn cá nhân",
      shadow: [
        "I usually get up at six thirty on weekdays.",
        "In my free time, I enjoy reading and playing badminton.",
        "I've been studying English for about five years.",
        "What I like most about my job is meeting new people.",
        "At weekends, I tend to spend time with my family."
      ],
      task: {
        title: "Your daily routine",
        prompt: "Talk about your typical weekday.",
        points: ["what you do in the morning", "how you get to work or school", "what you do in the evening", "which part of the day you like best and why"],
        prep: 60, talk: 120
      },
      phrases: ["I usually / normally…", "After that, …", "It takes me about … to get to…", "Once a week, I…", "To be honest, …", "My favourite part of the day is … because…"],
      followUp: ["What would you like to change about your routine?", "How is your weekend different from your weekdays?", "Do you prefer mornings or evenings? Why?"],
      model: "Well, on weekdays I usually get up at about six thirty. I have a quick breakfast, usually bread and a cup of coffee, and then I ride my motorbike to work. It takes about twenty minutes. I work in an office from eight until five. In the evening, I cook dinner with my family and then I relax. I often watch the news or read a book. I try to go to bed before eleven. To be honest, my favourite part of the day is the early morning, because the city is quiet and I can think clearly before I start work."
    },
    {
      id: "s2", title: "Describing a photo", topic: "Gia đình & Giải trí", mins: 20,
      type: "Mô tả tranh",
      picture: "picnic",
      shadow: [
        "In the picture, I can see a family having a picnic.",
        "In the foreground, there's a little girl playing with a dog.",
        "It looks like a warm, sunny day.",
        "They seem to be enjoying themselves.",
        "Maybe they are celebrating a special occasion."
      ],
      task: {
        title: "A day in the park",
        prompt: "Look at the picture and describe what you can see.",
        points: ["who the people are and what they are doing", "the place and the weather", "how the people are feeling", "what might happen next"],
        prep: 45, talk: 90
      },
      phrases: ["In the foreground / background…", "On the left / right…", "It looks like… / It seems that…", "They might be… / Perhaps…", "I think they are feeling… because…"],
      followUp: ["Do you like having picnics? Why or why not?", "Where do families in your town go at the weekend?", "Is it better to spend free time indoors or outdoors?"],
      model: "In this picture, I can see a family having a picnic in a park. In the foreground, there's a red and white blanket on the grass with a basket of food on it. On the left, a mother and a father are sitting on the blanket and chatting. On the right, a little girl is playing with a brown dog. In the background, there's a big tree and the sun is shining, so it looks like a warm, sunny day. Everyone seems relaxed and happy. Maybe it's the weekend and they want to spend some time together outside."
    },
    {
      id: "s3", title: "Making plans and suggestions", topic: "Bạn bè & Sự kiện", mins: 20,
      type: "Thảo luận – Đưa ra gợi ý",
      shadow: [
        "How about having a picnic by the lake?",
        "Why don't we go to a karaoke bar instead?",
        "That's a good idea, but it might be too expensive.",
        "I'd rather do something outdoors.",
        "So, shall we decide on the restaurant?"
      ],
      task: {
        title: "End-of-year class party",
        prompt: "Your class wants to organise an end-of-year party. Talk about these options and decide which is best.",
        points: ["a picnic by the lake", "a karaoke night", "dinner at a restaurant", "a boat trip", "a trip to the cinema"],
        prep: 60, talk: 120
      },
      phrases: ["How about + V-ing…?", "Why don't we…?", "Let's… / Shall we…?", "That's a good idea, but…", "I'd rather… than…", "What do you think about…?", "All things considered, I'd choose…"],
      followUp: ["What was the best party you have ever been to?", "Is it better to celebrate at home or go out?", "How do students in your country usually celebrate the end of the school year?"],
      model: "Let's see. How about having a picnic by the lake? It's cheap and everyone can bring some food. On the other hand, the weather might be bad. Why don't we go to a karaoke bar instead? It's fun and we can sing together. But some people in our class are quite shy, so maybe they wouldn't enjoy it. I think a boat trip would be the most memorable, but it could be too expensive. So, all things considered, I'd suggest the restaurant, because it's comfortable, the food is good and we can talk to each other easily. What do you think?"
    },
    {
      id: "s4", title: "Giving your opinion: smartphones", topic: "Công nghệ", mins: 25,
      type: "Trình bày quan điểm",
      shadow: [
        "In my opinion, smartphones are very useful for studying.",
        "On the other hand, they can be quite addictive.",
        "For example, many teenagers check their phones every few minutes.",
        "I partly agree with that idea.",
        "That's why I believe we need clear rules at home."
      ],
      task: {
        title: "Young people and smartphones",
        prompt: "Some people say young people spend too much time on their smartphones. Do you agree?",
        points: ["give your opinion clearly", "give at least two reasons", "add a personal example", "suggest a solution"],
        prep: 60, talk: 120
      },
      phrases: ["In my opinion / As far as I'm concerned…", "I (partly) agree that…", "On the one hand… On the other hand…", "For example / For instance…", "Another reason is that…", "That's why I believe…"],
      followUp: ["How much time do you spend on your phone every day?", "Should schools ban phones in class?", "What did people do before smartphones?"],
      model: "In my opinion, it's true that many young people spend too much time on their smartphones, but I only partly agree that this is a problem. On the one hand, smartphones are very useful. Students can look up information, watch lessons online and keep in touch with friends. On the other hand, phones can be quite addictive. For example, my younger brother checks his phone every few minutes, even during dinner, and he often goes to bed very late. Another reason is that social media can make teenagers feel stressed. That's why I believe families need clear rules, for example no phones at the dinner table and no phones in the bedroom after ten o'clock."
    }
  ],

  /* ============================ READING ============================ */
  reading: [
    {
      id: "r1", title: "My first week as a volunteer", topic: "Trải nghiệm", mins: 20,
      type: "Blog cá nhân", source: "Blog của Linh, 22 tuổi",
      text: [
        "Last summer, I decided to do something different. Instead of staying at home and watching TV, I joined a {volunteer|tình nguyện viên} programme at an animal {shelter|trại cứu hộ} in Da Nang. I was nervous on my first day because I had never worked with animals before.",
        "The staff were very friendly and explained everything {patiently|một cách kiên nhẫn}. My main job was to feed the dogs and clean their cages twice a day. It was hard work, and by the evening I was always {exhausted|kiệt sức}. However, I quickly learned that the animals needed more than food. Many of them had been {abandoned|bị bỏ rơi} by their owners and were afraid of people. So, every afternoon I sat with them and played games to help them feel safe.",
        "My favourite was a small brown dog called Bông. At first, he hid in the corner whenever I came in. By the end of the week, he was running to meet me at the door! That moment made me really happy.",
        "The experience taught me a lot about {responsibility|trách nhiệm} and patience. I also made new friends among the other volunteers, and we still {meet up|gặp gỡ} every month. If you have some free time, I strongly recommend volunteering. You don't need special skills – just a kind heart and a bit of energy."
      ],
      questions: [
        { type: "mc", q: "Why was Linh nervous on her first day?", o: ["She didn't know anyone there", "She had never worked with animals before", "She was afraid of dogs"], a: 1, e: "Đoạn 1: “I had never worked with animals before”." },
        { type: "mc", q: "What was Linh's main job?", o: ["Taking dogs for walks", "Feeding the dogs and cleaning their cages", "Finding new owners for the animals"], a: 1, e: "Đoạn 2: “feed the dogs and clean their cages twice a day”." },
        { type: "mc", q: "Why did Linh play games with the animals?", o: ["To help them feel safe", "To train them for a show", "Because the staff asked her to"], a: 0, e: "“played games to help them feel safe”." },
        { type: "mc", q: "How did Bông change during the week?", o: ["He became ill", "He started running to meet her", "He was taken home by a family"], a: 1, e: "“he was running to meet me at the door!”" },
        { type: "tf", q: "The animal shelter is in Hanoi.", a: "F", e: "Trại cứu hộ ở Da Nang." },
        { type: "tf", q: "Linh still meets the other volunteers regularly.", a: "T", e: "“we still meet up every month”." },
        { type: "mc", q: "What is the writer's main purpose?", o: ["To complain about hard work", "To encourage readers to volunteer", "To advertise a pet shop"], a: 1, e: "Đoạn cuối: “I strongly recommend volunteering”." }
      ]
    },
    {
      id: "r2", title: "Working from home: dream or nightmare?", topic: "Công việc", mins: 20,
      type: "Bài báo", source: "Tạp chí Lifestyle (bài viết mẫu)",
      text: [
        "Since 2020, millions of people around the world have started working from home, at least for part of the week. For many, it seemed like a dream: no traffic jams, no expensive lunches and more time with the family. But is it really as good as it sounds?",
        "According to a recent {survey|cuộc khảo sát} of 2,000 office workers, 68% said they felt more {productive|năng suất} at home because there were fewer {interruptions|sự gián đoạn}. Many also said they saved around an hour a day by not {commuting|đi lại đến chỗ làm}.",
        "However, working from home also has its {drawbacks|nhược điểm}. Nearly half of the people in the survey said they felt lonely, and a third admitted that they found it difficult to stop working in the evening. “When your office is in your bedroom, it's hard to {switch off|nghỉ ngơi, thư giãn đầu óc},” says Nam, a software developer from Hanoi.",
        "Experts suggest a few simple solutions. First, create a separate workspace, even if it is just a small desk in the corner. Second, keep regular hours and take short breaks. Finally, stay in touch with colleagues by video call, not just email.",
        "For most companies, the future seems to be a {hybrid|kết hợp} model, where employees spend two or three days in the office and the rest at home. This way, they can enjoy the benefits of both."
      ],
      questions: [
        { type: "tf", q: "68% of the workers in the survey felt more productive at home.", a: "T", e: "“68% said they felt more productive at home”." },
        { type: "tf", q: "Workers saved about two hours a day by not commuting.", a: "F", e: "Bài viết nói “around an hour a day”." },
        { type: "tf", q: "Nam works for an international company.", a: "NG", e: "Bài chỉ nói Nam là lập trình viên ở Hà Nội, không nhắc đến loại công ty." },
        { type: "mc", q: "About how many people in the survey felt lonely?", o: ["A third", "Nearly half", "Most of them"], a: 1, e: "“Nearly half of the people in the survey said they felt lonely”." },
        { type: "mc", q: "What problem does Nam describe?", o: ["His internet is too slow", "It's hard to stop thinking about work", "He misses his colleagues"], a: 1, e: "“it's hard to switch off” = khó dứt ra khỏi công việc." },
        { type: "tf", q: "Experts recommend communicating with colleagues only by email.", a: "F", e: "“stay in touch with colleagues by video call, not just email”." },
        { type: "mc", q: "What is a “hybrid model”?", o: ["Working only from home", "Working some days in the office and some at home", "Working in different countries"], a: 1, e: "Đoạn cuối giải thích: 2–3 ngày ở văn phòng, còn lại ở nhà." }
      ]
    },
    {
      id: "r3", title: "Notices, messages and signs", topic: "Đời sống hằng ngày", mins: 15,
      type: "Văn bản ngắn (dạng PET Part 1)", source: "Văn bản thực tế mô phỏng",
      notices: [
        { label: "A", kind: "Thông báo thư viện", text: "CITY LIBRARY – Books can now be {renewed|gia hạn} online up to three times. {Overdue|quá hạn} books: 5,000 VND per day." },
        { label: "B", kind: "Tin nhắn", text: "Hi Sam, the 7 pm film is sold out. I've booked the 9.15 one instead – meet you outside at 9? Jo" },
        { label: "C", kind: "Biển báo hồ bơi", text: "Children under 10 must be {accompanied|đi kèm} by an adult at all times." },
        { label: "D", kind: "Email", text: "Dear students, the deadline for the history project has been {extended|gia hạn, kéo dài} to Friday 15th. Please submit it by email, not on paper. Ms Hoa" },
        { label: "E", kind: "Nhãn sản phẩm", text: "Keep {refrigerated|bảo quản lạnh} after opening and use within 3 days." }
      ],
      questions: [
        { type: "mc", q: "Text A: What does the notice say?", o: ["You can renew books online a maximum of three times.", "You must return books within three days.", "Books can only be renewed at the library desk."], a: 0, e: "“renewed online up to three times” = tối đa 3 lần." },
        { type: "mc", q: "Text B: What does Jo want Sam to do?", o: ["Buy tickets for the 7 pm film", "Meet before the later film", "Choose a different cinema"], a: 1, e: "Suất 7 giờ hết vé → Jo đặt suất 9.15 và hẹn gặp lúc 9 giờ." },
        { type: "mc", q: "Text C: What does the sign mean?", o: ["Children under 10 cannot use the pool.", "Young children cannot swim without an adult.", "Adults must pay for children."], a: 1, e: "“must be accompanied by an adult at all times”." },
        { type: "mc", q: "Text D: What should students do?", o: ["Hand in the project on paper earlier", "Send the project by email by the new date", "Ask Ms Hoa for more time"], a: 1, e: "Hạn được kéo dài đến thứ Sáu 15, nộp qua email." },
        { type: "mc", q: "Text E: What is the instruction?", o: ["Keep it in the fridge and finish it within 3 days of opening", "Open it within 3 days of buying it", "Do not put it in the fridge"], a: 0, e: "“Keep refrigerated after opening and use within 3 days”." }
      ]
    },
    {
      id: "r4", title: "The problem with plastic", topic: "Môi trường", mins: 25,
      type: "Bài báo khoa học phổ thông", source: "Bài viết mẫu",
      text: [
        "Every year, millions of tonnes of plastic {end up|cuối cùng rơi vào} in our oceans. That is like emptying a rubbish truck full of plastic into the sea every minute. Some scientists warn that, if nothing changes, there could be more plastic than fish in the ocean by 2050.",
        "Plastic is a problem because it does not {disappear|biến mất}. Instead, it slowly breaks into tiny pieces called microplastics. Fish and sea birds often {mistake|nhầm lẫn} these pieces for food. As a result, microplastics have entered the {food chain|chuỗi thức ăn}, and researchers have even found them in salt and drinking water.",
        "So what can we do? Some countries have already taken action. Kenya, for example, {banned|cấm} plastic bags in 2017, and people who use them can receive a large fine. In Vietnam, some supermarkets have started wrapping vegetables in banana leaves instead of plastic.",
        "Individuals can also make a difference. Carrying a {reusable|tái sử dụng được} bag, refusing plastic straws and choosing products with less {packaging|bao bì} are small steps, but if millions of people take them, the effect is huge. As one environmental campaigner put it, when you throw something away, there is no such place as “away” – it must go somewhere."
      ],
      questions: [
        { type: "mc", q: "Why does the writer mention a rubbish truck?", o: ["To show how big the problem is", "To explain how plastic is collected", "To criticise rubbish companies"], a: 0, e: "Phép so sánh giúp người đọc hình dung quy mô vấn đề." },
        { type: "mc", q: "What are microplastics?", o: ["A new type of fish food", "Very small pieces of broken plastic", "Plastic made from plants"], a: 1, e: "“it slowly breaks into tiny pieces called microplastics”." },
        { type: "tf", q: "Microplastics have been found in drinking water.", a: "T", e: "“researchers have even found them in salt and drinking water”." },
        { type: "tf", q: "Kenya banned plastic bags in 2015.", a: "F", e: "Bài viết nói năm 2017." },
        { type: "tf", q: "Vietnamese supermarkets receive money from the government for using banana leaves.", a: "NG", e: "Bài không đề cập tiền hỗ trợ từ chính phủ." },
        { type: "mc", q: "What is the main idea of the last paragraph?", o: ["Plastic straws are the biggest problem", "Small personal actions can have a big effect together", "Only governments can solve the problem"], a: 1, e: "“small steps, but if millions of people take them, the effect is huge”." }
      ]
    }
  ],

  /* ============================ WRITING ============================ */
  writing: [
    {
      id: "w1", title: "An email to a friend", topic: "Du lịch", mins: 25,
      type: "Email thân mật", min: 100, max: 130,
      prompt: "Your English-speaking friend Alex is coming to visit your city next month. Write an email to Alex.",
      notes: ["Suggest some places to visit", "Recommend some local food", "Ask which dates Alex will arrive"],
      outline: ["Lời chào + câu mở đầu thân thiện", "Đoạn 1: gợi ý 1–2 địa điểm, lý do", "Đoạn 2: giới thiệu món ăn địa phương", "Đoạn 3: hỏi ngày đến, đề nghị giúp đỡ", "Câu kết + ký tên"],
      language: ["Great to hear from you!", "You should definitely visit…", "If you're interested in…, we could…", "You must try…", "By the way, …", "Let me know…", "I can't wait to see you!", "Best wishes,"],
      checks: [
        { re: "^\\s*(hi|hello|dear|hey)\\b", f: "im", label: "Mở đầu bằng lời chào (Hi/Dear…)" },
        { re: "(best wishes|love|see you|take care|cheers|regards|all the best)", f: "i", label: "Có câu kết thư thân mật" },
        { re: "(should|could|why don't|how about|you must|recommend|suggest|let's)", f: "i", label: "Có đưa ra gợi ý/ lời khuyên" },
        { re: "\\?", f: "", label: "Có câu hỏi (hỏi ngày đến)" }
      ],
      model: "Hi Alex,\n\nGreat to hear you're coming to Vinh next month! I can't wait to see you.\n\nThere are a few places you should definitely visit. Cua Lo beach is only twenty minutes away, and it's perfect for swimming and fresh seafood. If you're interested in history, we could also go to Kim Lien village, where President Ho Chi Minh was born.\n\nAs for food, you must try eel porridge. It's a local speciality and it's delicious, especially on a cool evening.\n\nBy the way, which dates will you arrive? Let me know your flight details and I'll pick you up at the airport.\n\nSee you soon!\nBest wishes,\nLan"
    },
    {
      id: "w2", title: "An article: learning a language", topic: "Giáo dục", mins: 30,
      type: "Bài báo (article)", min: 120, max: 160,
      prompt: "You see this announcement in an English-language magazine:\n“ARTICLES WANTED! What's the best way to learn a new language? Is it better to study in a class or on your own? Write an article and tell us your ideas.”",
      notes: ["Give the article a title", "Talk to the reader directly", "Give your opinion with reasons and examples", "Finish with a clear conclusion"],
      outline: ["Tiêu đề hấp dẫn", "Mở bài: câu hỏi gây chú ý cho người đọc", "Thân bài 1: học trên lớp – ưu điểm/ nhược điểm", "Thân bài 2: tự học – ví dụ cá nhân", "Kết bài: quan điểm của bạn"],
      language: ["Have you ever wondered…?", "In my opinion, …", "First of all, …", "On the other hand, …", "For example, …", "What's more, …", "In conclusion, …"],
      checks: [
        { re: "^[^\\n.]{3,60}\\n", f: "", label: "Có tiêu đề ở dòng đầu (không có dấu chấm)" },
        { re: "\\?", f: "", label: "Có câu hỏi hướng tới người đọc" },
        { re: "(in my opinion|i think|i believe|personally|as far as i'm concerned)", f: "i", label: "Nêu rõ quan điểm cá nhân" },
        { re: "(for example|for instance|such as)", f: "i", label: "Có ví dụ minh họa" },
        { re: "(in conclusion|to sum up|all in all|overall|so, )", f: "i", label: "Có đoạn kết luận" }
      ],
      model: "Learning a language? Mix it up!\n\nHave you ever wondered why some people learn languages so quickly? In my opinion, the secret is not choosing between a class and studying alone, but doing both.\n\nFirst of all, a class gives you structure. A good teacher explains grammar clearly, corrects your mistakes and makes you speak, even when you feel shy. What's more, you meet other learners who can keep you motivated.\n\nOn the other hand, two hours a week in a classroom is not enough. You also need to practise on your own every day. For example, I listen to English podcasts on my way to work and I write a short diary in English before bed. It only takes fifteen minutes, but it really helps.\n\nIn conclusion, take a class to build a strong base, but make the language part of your daily life too."
    },
    {
      id: "w3", title: "A short story", topic: "Sáng tạo", mins: 30,
      type: "Truyện ngắn", min: 100, max: 140,
      prompt: "Your English teacher has asked you to write a story. Your story must begin with this sentence:\n“When I opened the door, I couldn't believe my eyes.”",
      notes: ["Begin with the sentence given", "Use past tenses correctly", "Use time words to order the events", "Describe feelings and give the story a clear ending"],
      outline: ["Câu mở đầu cho sẵn", "Mô tả điều bất ngờ (ai, cái gì, ở đâu)", "Diễn biến: 2–3 sự việc nối bằng từ chỉ thời gian", "Cao trào: điều gì xảy ra?", "Kết thúc + cảm xúc của nhân vật"],
      language: ["At first, …", "Suddenly, …", "A few minutes later, …", "I was so surprised/ shocked/ delighted that…", "Just then, …", "In the end, …", "It was the best day of my life."],
      checks: [
        { re: "when i opened the door, i couldn.?t believe my eyes", f: "i", label: "Bắt đầu bằng câu cho sẵn" },
        { re: "(suddenly|then|after that|later|finally|in the end|at first|just then)", f: "i", label: "Có từ chỉ trình tự thời gian" },
        { re: "\\b\\w{2,}ed\\b", f: "gi", min: 6, label: "Dùng nhiều động từ quá khứ (≥ 6 động từ -ed)" },
        { re: "(surprised|shocked|happy|delighted|scared|frightened|excited|nervous|amazed)", f: "i", label: "Có miêu tả cảm xúc" },
        { re: "[“\"][^”\"]{2,}[”\"]", f: "", label: "Có lời thoại trực tiếp (trong ngoặc kép)" }
      ],
      model: "When I opened the door, I couldn't believe my eyes. My tiny living room was full of balloons, and all my classmates were standing there in silence.\n\nAt first, I was confused. It wasn't my birthday, and I had only come home to get my football boots. Then my best friend Huy stepped forward with a huge cake.\n\n“Congratulations!” everyone shouted. Suddenly, I understood. That morning, our teacher had announced the results of the national English competition, but I had missed the class because I was ill. I had won first prize!\n\nI was so surprised that I almost dropped my bag. We laughed, ate cake and played music until late in the evening. In the end, I never found my football boots, but I didn't care. It was one of the best days of my life."
    },
    {
      id: "w4", title: "A formal complaint email", topic: "Mua sắm", mins: 30,
      type: "Email trang trọng", min: 120, max: 150,
      prompt: "You bought a pair of wireless headphones from an online shop called SoundBox. When they arrived, they were damaged and the charging cable was missing. Write an email to the company.",
      notes: ["Explain what you bought and when", "Describe the problems", "Say how you feel about the service", "Say what you want the company to do"],
      outline: ["Dear Sir or Madam,", "Lý do viết thư + thông tin đơn hàng", "Mô tả vấn đề (2 vấn đề)", "Cảm nhận về dịch vụ", "Yêu cầu: đổi hàng/ hoàn tiền + thời hạn", "Yours faithfully, + họ tên"],
      language: ["I am writing to complain about…", "I ordered… on… (order number…)", "Unfortunately, …", "In addition, …", "I was very disappointed because…", "I would like you to…", "I look forward to hearing from you.", "Yours faithfully,"],
      checks: [
        { re: "^\\s*dear\\b", f: "im", label: "Mở đầu trang trọng (Dear Sir or Madam / Dear …)" },
        { re: "(i am writing|i'm writing)", f: "i", label: "Nêu lý do viết thư" },
        { re: "\\d", f: "", label: "Có thông tin cụ thể (ngày, mã đơn hàng…)" },
        { re: "(refund|replace|replacement|exchange|money back)", f: "i", label: "Có yêu cầu rõ ràng (hoàn tiền/ đổi hàng)" },
        { re: "(yours faithfully|yours sincerely|kind regards|best regards)", f: "i", label: "Kết thư trang trọng" },
        { re: "^(?![\\s\\S]*\\b\\w+(n't|'m|'re|'ve|'ll)\\b)", f: "i", label: "Tránh viết tắt (don't, I'm…) trong thư trang trọng" }
      ],
      model: "Dear Sir or Madam,\n\nI am writing to complain about a pair of wireless headphones which I ordered from your website on 10 November (order number SB2741).\n\nUnfortunately, when the parcel arrived, the headphones were damaged. The left side is cracked and it does not produce any sound. In addition, the charging cable was missing from the box, so I cannot use the headphones at all.\n\nI was very disappointed with your service, because your website promises that every product is checked carefully before delivery. I paid for express delivery because I needed the headphones for a trip next week.\n\nI would like you to send me a replacement as soon as possible. If this is not possible, I would like a full refund.\n\nI look forward to hearing from you.\n\nYours faithfully,\nNguyen Van An"
    }
  ],

  /* ============================ GRAMMAR BANK (cho bài kiểm tra) ============================ */
  grammar: [
    { q: "If it ___ tomorrow, we'll cancel the picnic.", o: ["rains", "will rain", "rained", "would rain"], a: 0, e: "Câu điều kiện loại 1: If + hiện tại đơn, will + V." },
    { q: "I ___ in this city since 2015.", o: ["live", "am living", "have lived", "lived"], a: 2, e: "“since + mốc thời gian” → hiện tại hoàn thành." },
    { q: "She asked me where I ___.", o: ["live", "lived", "am living", "do live"], a: 1, e: "Câu gián tiếp: lùi thì hiện tại → quá khứ." },
    { q: "The bridge ___ in 1998.", o: ["built", "was built", "has built", "is building"], a: 1, e: "Bị động thì quá khứ đơn: was/were + V3." },
    { q: "This is the hotel ___ we stayed last summer.", o: ["which", "who", "where", "when"], a: 2, e: "“where” thay cho nơi chốn (= in which)." },
    { q: "I'm looking forward to ___ you again.", o: ["see", "seeing", "saw", "have seen"], a: 1, e: "look forward to + V-ing." },
    { q: "He's ___ student in our class.", o: ["the tallest", "taller", "most tall", "the most tall"], a: 0, e: "So sánh nhất tính từ ngắn: the + adj-est." },
    { q: "While I ___ dinner, the phone rang.", o: ["cooked", "was cooking", "am cooking", "have cooked"], a: 1, e: "Hành động đang diễn ra (quá khứ tiếp diễn) bị một hành động khác xen vào." },
    { q: "If I ___ more money, I would travel around the world.", o: ["have", "had", "will have", "would have"], a: 1, e: "Câu điều kiện loại 2: If + quá khứ đơn, would + V." },
    { q: "We've lived here ___ ten years.", o: ["since", "for", "during", "ago"], a: 1, e: "for + khoảng thời gian." },
    { q: "She's used to ___ up early.", o: ["get", "getting", "got", "gets"], a: 1, e: "be used to + V-ing (đã quen với)." },
    { q: "By the time we arrived, the film ___.", o: ["started", "has started", "had started", "was start"], a: 2, e: "Hành động xảy ra trước một hành động quá khứ khác → quá khứ hoàn thành." },
    { q: "You'd better ___ a jacket. It's cold outside.", o: ["take", "to take", "taking", "took"], a: 0, e: "had better + V nguyên mẫu." },
    { q: "Neither Tom ___ Anna came to the party.", o: ["or", "nor", "and", "but"], a: 1, e: "Cấu trúc neither … nor …" },
    { q: "I wish I ___ speak French.", o: ["can", "could", "will", "am able"], a: 1, e: "wish + quá khứ (could) cho mong ước ở hiện tại." },
    { q: "You ___ smoke here. It's against the rules.", o: ["mustn't", "don't have to", "needn't", "shouldn't to"], a: 0, e: "mustn't = bị cấm." },
    { q: "The museum is ___ interesting than I expected.", o: ["much", "more", "most", "very"], a: 1, e: "So sánh hơn tính từ dài: more + adj + than." },
    { q: "How long ___ you been waiting?", o: ["are", "did", "have", "were"], a: 2, e: "Hiện tại hoàn thành tiếp diễn: have/has been + V-ing." },
    { q: "My phone ___ by a technician yesterday.", o: ["repaired", "was repaired", "is repaired", "has repaired"], a: 1, e: "Bị động quá khứ đơn (có “yesterday”)." },
    { q: "I don't mind ___ the washing-up.", o: ["do", "to do", "doing", "done"], a: 2, e: "mind + V-ing." }
  ],

  /* Lộ trình gợi ý 4 tuần */
  plan: [
    { week: "Tuần 1", focus: "Bản thân & Du lịch", items: ["l1", "r1", "s1", "w1"] },
    { week: "Tuần 2", focus: "Công việc & Giáo dục", items: ["l2", "r2", "s2", "w2"] },
    { week: "Tuần 3", focus: "Sức khỏe & Đời sống", items: ["l3", "r3", "s3", "w3"] },
    { week: "Tuần 4", focus: "Môi trường & Công nghệ", items: ["l4", "r4", "s4", "w4"] }
  ]
};

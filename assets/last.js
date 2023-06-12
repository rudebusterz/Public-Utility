$(document).ready(function() {
    $('.button').click(function() {
        window.location.href = "main.html";
    });
});

$(document).ready(function() {
    $('.button02').click(function() {
        var greetings = [
            '당장의 것을 취하는 것은 성급한 일일지도 모른다.',
            '처음 가진 느낌대로 향하라.',
            '첫 선택이 최선의 선택이다.',
            '주변의 현명한 사람에게 의견을 구하라.',
            '의욕만 있으면 그것이 무엇이든 상관있으랴.',
            '가장 나중에 떠오른 것이 길이다.',
            '그대 마음 속에 답이 있을 것.'
            ];

        var random = Math.floor(Math.random() * greetings.length);
        var randomGreeting = greetings[random];

        $('h1.HL').text(randomGreeting);
    });
});

$(document).ready(function() {
    $('.button02').click(function() {
        $('.button02').hide(); // 이미지 숨기기
    });
});
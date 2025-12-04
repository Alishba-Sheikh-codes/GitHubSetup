// -------------------------
// HEALTH ARTICLE SECTION
// -------------------------

var xhr = new XMLHttpRequest();
xhr.open('GET', './health_article.json', true);
xhr.responseType = 'json';

xhr.onload = function () {
    var data = xhr.response;
    var articles = data.article;  
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function (benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
};

xhr.send();


// -------------------------
// NEWS ARTICLE SECTION
// -------------------------

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', './news_article.json', true);
xhr2.responseType = 'json';

xhr2.onload = function () {
    var data2 = xhr2.response;
    var articles2 = data2.article;
    var articlesDiv2 = document.getElementById('newsarticle');  // FIXED name

    articles2.forEach(function (article) {
        var articleDiv2 = document.createElement('div');
        articleDiv2.classList.add('article');

        var title2 = document.createElement('h2');
        title2.textContent = article.title;

        var description2 = document.createElement('p');
        description2.textContent = article.description;

        var waysHeader2 = document.createElement('h3');
        waysHeader2.textContent = 'Ways to Achieve:';

        var waysList2 = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {
            var listItem2 = document.createElement('li');
            listItem2.textContent = way;
            waysList2.appendChild(listItem2);
        });

        var benefitsHeader2 = document.createElement('h3');
        benefitsHeader2.textContent = 'Benefits:';

        var benefitsList2 = document.createElement('ul');
        article.benefits.forEach(function (benefit) {
            var listItem2 = document.createElement('li');
            listItem2.textContent = benefit;
            benefitsList2.appendChild(listItem2);
        });

        articleDiv2.appendChild(title2);
        articleDiv2.appendChild(description2);
        articleDiv2.appendChild(waysHeader2);
        articleDiv2.appendChild(waysList2);
        articleDiv2.appendChild(benefitsHeader2);
        articleDiv2.appendChild(benefitsList2);

        articlesDiv2.appendChild(articleDiv2);
    });
};

xhr2.send();

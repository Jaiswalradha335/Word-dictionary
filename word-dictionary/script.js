const txtBox = document.querySelector(".txtBox");
const form = document.querySelector(".searchForm");
const searchWord = document.querySelector(".search-word");
const description = document.querySelector(".description");
const dictionaryJson = "https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json";

function searchDict(e) {
    e.preventDefault();
    fetch(dictionaryJson)
        .then(response => response.json())
        .then(data => {
            let word = txtBox.value.trim();
            let searchKeyword = word.toUpperCase();

            if (data[searchKeyword]) {
                searchWord.textContent = searchKeyword;
                description.textContent = data[searchKeyword];
            } else {
                searchWord.textContent = searchKeyword;
                description.textContent = "Not found";
            }
        })
        .catch(error => {
            console.error("Error fetching the dictionary data:", error);
            searchWord.textContent = "Error";
            description.textContent = "Could not fetch the dictionary data.";
        });
}

form.addEventListener("submit", searchDict);

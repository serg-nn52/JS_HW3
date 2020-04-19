function Book(name, author, publishingHouse, year, edition, id, pageCount){
    this.name = name;
    this.author = author;
    this.publishingHouse = publishingHouse;
    this.year = year;
    this.edition = edition;
    this.id = id;
    this.pageCount = pageCount;

    this.pageCount = function(){
        return this.pageCount;
    };
};

function Journal(publishingHouse, year, number, id, pageCount){
    this.publishingHouse = publishingHouse;
    this.year = year;
    this.number = number;
    this.id = id;
    this.pageCount = pageCount;

    this.method = function(){
        if(this.pageCount<=32){return this.pageCount;
        return this.year;
        } else{
            alert('Количество страниц не должно быть больше 32!')
        };
    };

}
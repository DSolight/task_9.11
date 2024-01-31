const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров"
        }
    }`,
    
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Елена",
            "id_3": "Василиса",
            "id_4": "Наталья",
            "id_5": "София",
            "id_6": "Полина",
            "id_7": "Кристина",
            "id_8": "Олеся",
            "id_9": "Елизавета",
            "id_10": "Анна"
        }
    }`,

    fathersNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,

    fathersNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михаиловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Шахтёр",
            "id_2": "Врач",
            "id_3": "Слесарь",
            "id_4": "Водитель",
            "id_5": "Сторож",
            "id_6": "Инженер",
            "id_7": "Преподаватель",
            "id_8": "Электрик",
            "id_9": "Строитель",
            "id_10": "Сварщик"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Архитектор",
            "id_2": "Дизайнер",
            "id_3": "Менджер в IT",
            "id_4": "Медицинская сестра",
            "id_5": "Лаборант",
            "id_6": "Биотехнолог",
            "id_7": "Стоматолог",
            "id_8": "Психолог",
            "id_9": "Финансист",
            "id_10": "Банковский работник"
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    genderMale: 'Мужчина',
    genderFemale: 'Женщина',
    gender: 'Default',
    year: 0,
    day: 0,
    month: "",

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {
        gender = this.randomIntNumber(1, 0) == 1 ? this.genderMale : this.genderFemale;
        return gender
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (gender === this.genderMale) {
            return this.randomValue(this.firstNameMaleJson);
          } else {
            return this.randomValue(this.firstNameFemaleJson);
          }
    },

    randomsurName: function() {
        if (gender === this.genderMale) {
            return this.randomValue(this.surnameJson);
          } else {
            return this.randomValue(this.surnameJson) + "a";
          }
    },

    randomfathersName: function() {
        if (gender === this.genderMale) {
            return this.randomValue(this.fathersNameMaleJson);
          } else {
            return this.randomValue(this.fathersNameFemaleJson);
          }
    },

    /**Альтернатива для отчества если не будет имени Никита, Дмитрий и т.д.
     * randomfathersName: function() {
     *      if (gender === this.genderMale) {
     *          return this.randomValue(this.firstNameMaleJson) + "ович";
     *          } else {
     *          return this.randomValue(this.firstNameMaleJson) + "овна";
     *          }
     * },
     * Тогда не нужно будет создавать отдельный блок Json с Отчеством для каждого пола:) 
     */

    randomDMY: function() {
        this.year = this.randomIntNumber(2010, 1970);
        this.month = this.randomValue(this.monthJson);
        if (this.month === 'id_1' || this.month === 'id_3' || this.month === 'id_5' || this.month === 'id_7' || this.month === 'id_8' || this.month === 'id_10' || this.month === 'id_12') {
            this.day = this.randomIntNumber(31, 1);
        } else if (this.monthJson === `id_2`) {
            this.day = this.randomIntNumber(29, 1);
        } else {
            this.day = this.randomIntNumber(30, 1);
        }

        return this.day + " " + this.month + " " + this.year
    },
    
    
    /** Первый вариант только с годом рождения
    * randombirthYear: function() {
    *    year = this.randomIntNumber(2010, 1970) + " г. р.";
    *    return year
    *},
    */

    randomprofession: function() {
        if (gender === this.genderMale) {
            return this.randomValue(this.professionMaleJson);
          } else {
            return this.randomValue(this.professionFemaleJson);
          }
    },// Финменитивы же мы не используем? Такие как "Шахтёрка" или "Директорка":)

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomsurName();
        this.person.fathersName = this.randomfathersName();
        this.person.birthDMY = this.randomDMY();
        this.person.profession = this.randomprofession();
        return this.person;
    }
};

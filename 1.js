function Person(first, last, age, gender, interests, pronoun) {
  this.name = {
    'first': first,
    'last' : last,
  }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.' + this.pronoun + ' ' + 'likes' + ' ' + this.interests[0] + ' and ' + this.interests[1] + ' ' + 'and' + ' '  + this.interests[2] + '.'); 
    };
    this.greeting = function() {
      console.log('Hi! Im ' + this.name.first + '.');
    };
    this.pronoun = pronoun;
  };


  let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'gaming'], 'He');
  person1.bio();
  person1.greeting();

  let person2 = new Person('Mika', 'Kazuki', '17', 'Female', ['reading', 'gaming', 'music'], 'She');
  person2.bio();
  person2.greeting();

  let person3 = new Person('Wukong', 'Sun', '24', 'Male', ['fighting', 'eating', 'sleeping'], 'He')
  person3.bio();
  person3.greeting();

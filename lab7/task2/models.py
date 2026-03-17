class Animal:
    def __init__(self, name: str, age: int, weight: int):
        self.name = name
        self.age = age
        self.weight = weight

    def sound(self):
        print("sound: ")

    def __str__(self):
        return f"My name is {self.name}, i am {self.age} y.o. And i weight {self.weight} kg"
    
class Cat(Animal):
    def __init__(self, name: str, age: int, weight: int, color: str):
        super().__init__(name, age, weight)
        self.color = color

    def sound(self):
        super().sound()
        print("meow")
    
    def love_milk(self):
        print("I love milk!!!")

    def __str__(self):
        return super().__str__()+f", I am a cat! and I also {self.color} color."
    
class Dog(Animal):
    def __init__(self, name: str, age: int, weight: int, toy: str):
        super().__init__(name, age, weight)
        self.toy = toy

    def sound(self):
        super().sound()
        print("bark")
    
    def love_toy(self):
        print("I love playing with my toy!!!")

    def __str__(self):
        return super().__str__()+f", I am a dog! and I also have my favourite toy called: {self.toy}"
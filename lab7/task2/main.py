from .models import Dog, Animal, Cat

cat = Cat("mursik", 5, 4, "grey")
dog = Dog("layka", 6, 10, "bone")

animals = []
animals.append(cat)
animals.append(dog)

for i in animals:
    print(i)
    i.sound()
    if isinstance(i, Cat): i.love_milk()
    elif isinstance(i, Dog): i.love_toy()
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


(1..10).each { |n| Question.create(url: "./assets/question#{n}.png")}

Answer.create(text: "A protected variable", correct: false, question_id: 1)
Answer.create(text: "A static variable", correct: false, question_id: 1)
Answer.create(text: "A global variable", correct: true, question_id: 1)

Answer.create(text: "16-bit bytes", correct: false, question_id: 2)
Answer.create(text: "12-bit bytes", correct: false, question_id: 2)
Answer.create(text: "8-bit bytes", correct: true, question_id: 2)

Answer.create(text: "Dynamic Type System", correct: false, question_id: 3)
Answer.create(text: "Automatic Memory Management", correct: false, question_id: 3)
Answer.create(text: "All of these", correct: true, question_id: 3)

Answer.create(text: "Strongly typed/Statically typed", correct: false, question_id: 4)
Answer.create(text: "Weakly typed/Dynamically typed", correct: false, question_id: 4)
Answer.create(text: "Strongly typed/Dynamically typed", correct: true, question_id: 4)

Answer.create(text: "Integer", correct: false, question_id: 5)
Answer.create(text: "String", correct: false, question_id: 5)
Answer.create(text: "Neither of these", correct: true, question_id: 5)

Answer.create(text: "interface", correct: false, question_id: 6)
Answer.create(text: "short", correct: false, question_id: 6)
Answer.create(text: "program", correct: true, question_id: 6)

Answer.create(text: '"5*6"', correct: false, question_id: 7)
Answer.create(text: "EvalError", correct: false, question_id: 7)
Answer.create(text: "30", correct: true, question_id: 7)

Answer.create(text: "strip()", correct: false, question_id: 8)
Answer.create(text: "removeWhitespace()", correct: false, question_id: 8)
Answer.create(text: "trim()", correct: true, question_id: 8)

Answer.create(text: "async", correct: false, question_id: 9)
Answer.create(text: "await", correct: false, question_id: 9)
Answer.create(text: "defer", correct: true, question_id: 9)

Answer.create(text: "B = inherit(A)", correct: false, question_id: 10)
Answer.create(text: "B = A.inherit()", correct: false, question_id: 10)
Answer.create(text: "B.prototype = inherit(A)", correct: true, question_id: 10)

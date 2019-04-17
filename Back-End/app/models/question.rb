class Question < ApplicationRecord
  has_many :answers

  def correct_answer
    Answer.all.select {|answer| answer.question_id == self.id && answer.correct == true}
  end

  def wrong_answers
    Answer.all.select {|answer| answer.question_id == self.id && answer.correct == false}
  end
end

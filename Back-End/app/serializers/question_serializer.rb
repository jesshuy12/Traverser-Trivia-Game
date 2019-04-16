class QuestionSerializer < ActiveModel::Serializer
  attributes :url, :answers, :correctAnswer

  def answers
    $random_three_num_arr = [0, 1, 2].shuffle
    $random_two_num_arr = [0, 1].shuffle
    $random_letter_arr = ["a", "b", "c"].shuffle
    {
    "#{$random_letter_arr[$random_three_num_arr[0]]}": object.wrong_answers[$random_two_num_arr[0]].text,
    "#{$random_letter_arr[$random_three_num_arr[1]]}": object.wrong_answers[$random_two_num_arr[1]].text,
    "#{$random_letter_arr[$random_three_num_arr[2]]}": object.correct_answer.first.text
    }
  end

  def correctAnswer
    "#{$random_letter_arr[$random_three_num_arr[2]]}"
  end

end

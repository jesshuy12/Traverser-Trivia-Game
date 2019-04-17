class QuestionsController < ApplicationController
  def show
    @question = Question.find_by(id: params[:id])

    render json: @question
  end

  def index
    @questions = Question.all

    render json: @questions
  end
end

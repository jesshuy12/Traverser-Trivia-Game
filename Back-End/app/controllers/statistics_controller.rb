class StatisticsController < ApplicationController
  def create
    statistic = Statistic.create(statistic_params)
  end

  def index
    @statistics = Statistic.all.sort_by { |stat| stat.score}

    render json: @statistics.reverse[0..9]
  end

  private

  def statistic_params
    params.require(:statistic).permit(:name, :score)
  end
end

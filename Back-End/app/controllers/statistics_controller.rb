class StatisticsController < ApplicationController
  def create
    statistic = Statistic.create(statistic_params)
  end

  private

  def statistic_params
    params.require(:statistic).permit(:name, :score)
  end
end

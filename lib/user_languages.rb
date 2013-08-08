class UserLanguages
  attr_accessor :user

  def initialize(user)
    @user = user
  end

  def client
    @client ||= Octokit::Client.new(login: ENV['GITHUB_USERNAME'], password: ENV['GITHUB_PASSWORD'])
  end

  def stars_by_language
    languages = client.starred(user).group_by(&:language).delete_if { |language| language.nil? }
  end

  def chart_json
    languages = self.stars_by_language
    json = {
      labels: languages.keys,
      datasets: [
        {
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          data: languages.map { |l, repos| repos.count }
        }
      ]
    }.to_json
  end

end

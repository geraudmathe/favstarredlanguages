class SmithApp < Sinatra::Application

  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    erb :index
  end

  get '/*.json' do |username|
    content_type :json
    UserLanguages.new(username).chart_json
  end

  get '/*' do |username|
    languages = UserLanguages.new(username).stars_by_language
    haml :index, locals: { languages: languages, username: username }
  end

end

require_relative 'lib/user_languages'

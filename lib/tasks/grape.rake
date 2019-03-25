namespace :grape do
  desc 'Show API routes'
  task routes: :environment do
    mapping = {
      method: 'request_method',
      path: 'path',
      version: 'version',
      description: 'description'
    }

    grape_klasses = ObjectSpace.each_object(Class).select { |klass| klass < Grape::API }
    routes = grape_klasses
               .flat_map(&:routes)
               .uniq { |r| r.send(mapping[:path]) + r.send(mapping[:method]).to_s }

    method_width, path_width, version_width, desc_width = -> {
      [
        routes.map { |r| r.send(mapping[:method]).try(:length) }.compact.max || 0,
        routes.map { |r| r.send(mapping[:path]).try(:length) }.compact.max || 0,
        routes.map { |r| r.send(mapping[:version]).try(:length) }.compact.max || 0,
        routes.map { |r| r.send(mapping[:description]).try(:length) }.compact.max || 0
      ]
    }.call

    routes.each do |api|
      method = api.send(mapping[:method]).to_s.rjust(method_width)
      path = api.send(mapping[:path]).to_s.ljust(path_width)
      version = api.send(mapping[:version]).to_s.ljust(version_width)
      desc = api.send(mapping[:description]).to_s.ljust(desc_width)
      puts "     #{method}  |  #{path}  |  #{version}  |  #{desc}"
    end
  end
end

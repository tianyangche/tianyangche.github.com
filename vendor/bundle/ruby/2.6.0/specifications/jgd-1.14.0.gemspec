# -*- encoding: utf-8 -*-
# stub: jgd 1.14.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jgd".freeze
  s.version = "1.14.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "rubygems_mfa_required" => "true" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Yegor Bugayenko".freeze]
  s.date = "2023-11-08"
  s.description = "Automated deployment of your Jekyll blog to Github Pages".freeze
  s.email = "yegor256@gmail.com".freeze
  s.executables = ["jgd".freeze]
  s.extra_rdoc_files = ["README.md".freeze, "LICENSE.txt".freeze]
  s.files = ["LICENSE.txt".freeze, "README.md".freeze, "bin/jgd".freeze]
  s.homepage = "http://github.com/yegor256/jekyll-github-deploy".freeze
  s.licenses = ["MIT".freeze]
  s.rdoc_options = ["--charset=UTF-8".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.3".freeze)
  s.rubygems_version = "3.0.3.1".freeze
  s.summary = "Jekyll Github Deploy".freeze

  s.installed_by_version = "3.0.3.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>.freeze, [">= 1"])
      s.add_runtime_dependency(%q<trollop>.freeze, [">= 2"])
    else
      s.add_dependency(%q<jekyll>.freeze, [">= 1"])
      s.add_dependency(%q<trollop>.freeze, [">= 2"])
    end
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 1"])
    s.add_dependency(%q<trollop>.freeze, [">= 2"])
  end
end

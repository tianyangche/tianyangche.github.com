# -*- encoding: utf-8 -*-
# stub: devlopr 0.4.5 ruby lib

Gem::Specification.new do |s|
  s.name = "devlopr".freeze
  s.version = "0.4.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "plugin_type" => "theme" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Sujay Kundu".freeze]
  s.date = "2020-01-12"
  s.email = ["sujaykundu777@gmail.com".freeze]
  s.homepage = "https://github.com/sujaykundu777/devlopr-jekyll".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3.1".freeze
  s.summary = "A Jekyll Theme built for developers".freeze

  s.installed_by_version = "3.0.3.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.5", "< 5.0"])
      s.add_runtime_dependency(%q<jekyll-sitemap>.freeze, ["~> 1.4.0"])
      s.add_runtime_dependency(%q<jekyll-feed>.freeze, ["~> 0.13.0"])
      s.add_runtime_dependency(%q<jekyll-seo-tag>.freeze, ["~> 2.6.1"])
      s.add_runtime_dependency(%q<jekyll-paginate>.freeze, ["~> 1.1.0"])
      s.add_runtime_dependency(%q<jekyll-gist>.freeze, ["~> 1.5.0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 2.1.4"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 12.0"])
    else
      s.add_dependency(%q<jekyll>.freeze, [">= 3.5", "< 5.0"])
      s.add_dependency(%q<jekyll-sitemap>.freeze, ["~> 1.4.0"])
      s.add_dependency(%q<jekyll-feed>.freeze, ["~> 0.13.0"])
      s.add_dependency(%q<jekyll-seo-tag>.freeze, ["~> 2.6.1"])
      s.add_dependency(%q<jekyll-paginate>.freeze, ["~> 1.1.0"])
      s.add_dependency(%q<jekyll-gist>.freeze, ["~> 1.5.0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 2.1.4"])
      s.add_dependency(%q<rake>.freeze, ["~> 12.0"])
    end
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 3.5", "< 5.0"])
    s.add_dependency(%q<jekyll-sitemap>.freeze, ["~> 1.4.0"])
    s.add_dependency(%q<jekyll-feed>.freeze, ["~> 0.13.0"])
    s.add_dependency(%q<jekyll-seo-tag>.freeze, ["~> 2.6.1"])
    s.add_dependency(%q<jekyll-paginate>.freeze, ["~> 1.1.0"])
    s.add_dependency(%q<jekyll-gist>.freeze, ["~> 1.5.0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 2.1.4"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.0"])
  end
end

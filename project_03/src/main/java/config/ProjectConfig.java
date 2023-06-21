package config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = {"services", "repositories", "proxies", "model"})
public class ProjectConfig {
}
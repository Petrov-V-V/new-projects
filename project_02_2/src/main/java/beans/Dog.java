package beans;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

/*
 * Собака
 */
@Component
public class Dog{
    private String name;

    @PostConstruct
    public void setName() {
        this.name = "Fu Han";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

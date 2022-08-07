package com.example.ants.annotation;

import org.junit.jupiter.api.Tag;

import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * The interface Integration test.
 */
@Target({ java.lang.annotation.ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Tag("integrationTest")
@Inherited
public @interface IntegrationTest {
}

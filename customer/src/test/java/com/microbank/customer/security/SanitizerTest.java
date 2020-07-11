package com.microbank.customer.security;

import java.io.File;
import java.nio.file.Files;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.core.io.ClassPathResource;

public class SanitizerTest {

  private static String json;

  @BeforeClass
  public static void setupClass() throws Exception {
    final File resource = new ClassPathResource("json/Customer.json").getFile();
    json = Files.readString(resource.toPath());
    // Replace newlines with a space after them and then just newlines with an empty string.
    json = json.replace("\r\n ", "").replace("\n ", "").replace("\r\n", "").replace("\n", "");
  }

  @Test
  public void testSanitizeJson() throws Exception {
    String result = Sanitizer.sanitizeJson(json);
    Assert.assertEquals(json, result);
  }
}
package com.microbank.customer.model.exception;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionResponse {
  private String timestamp;
  private Integer status;
  private String error;
  private String message;
  private String path;
  private ExceptionCause cause;
}

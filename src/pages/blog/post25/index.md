---
title: "Undergraduate Research Assistant"
company: SciPy Grants
fromDate: "Fall 2019"
toDate: "Spring 2021"
order: 2
description: As an undergraduate research assistant, I have been contributing to the Scientific Python ("SciPy") since November of 2019 under various research grants. 
---
![scipy-logo](/scipy-logo-300.png)
## Overview 
As an undergraduate research assistant, I have been contributing to the Scientific Python ("SciPy") since November of 2019 under various research grants. Under supervision of a professor on campus, I have made enhancements to `scipy.stats` and `scipy.linalg`.

Most recently, under the grant, "A Solid Foundation for Statistics in Python with SciPy," we have worked to make enhancements in several areas to SciPy's statistical functions. See the full grant proposal [here](https://warrenweckesser.github.io/czi/scipy-2019-czi-proposal-revised.pdf). 



Most notably, I worked to

  1. increase the speed and accuracy of continuous distributions fit methods
  2. Research and implement the Alexander-Govern and Tukey-Kramer statistical methods



Under a NumFOCUS grant, we made enhancements to `scipy.linalg` by wrapping 8 new fortran functions. I participated in this project by creating a parametrized unit test suite for each Fortran Linear Algebra Package (LAPACK) prior to the wrapper being written. 



## Statistics 

##### Fit methods


The fit methods for SciPy's continuous distributions ([`scipy.stats`](https://docs.scipy.org/doc/scipy/reference/stats.html)) by default determine the best fit by optimizing over its associated log-likelihood equation. While this often effective enough to satisfy user needs, as data size increase and the number of shapes and parameter increase, it can begin to take a long time. 

Through the use of maximum likelihood estimation (MLE) formula, we were able to cut down fit times by several factors, from milliseconds to microseconds. For example, if we take a look at the Pareto distribution's (`scipy.stats.pareto`) behavior in the benchmark that I wrote, there is a precipitous drop in fit speeds when the fit method was overridden:
![benchmark](/benchmark.png)

It is significant to note that MLE formula may not always be appropriate alongside fixed, non-optimal, other parameters. These situations did not experience a speed increase. 

I implemented this enhancement for 8 continuous distributions.

##### Addition of Statistical Tests

The Tukey-Kramer and Alexander-Govern statistical tests are not well known but are still very useful for their respective use cases.

The implementation of both of these required research to first determine the process of the test, and then to determine what would be the best method of implementation. The method of implementation is important to consider in order to ensure that the test executes as fast as possible.

I worked hard to ensure that the user interaction with both of these tests was clean and easy to use:

    >>> from scipy.stats import alexandergovern
    >>> atlanta = [13.75, 13.75, 13.5, 13.5, 13.0, 13.0, 13.0, 12.75, 12.5]
    >>> chicago = [14.25, 13.0, 12.75, 12.5, 12.5, 12.4, 12.3, 11.9, 11.9]
    >>> houston = [14.0, 14.0, 13.51, 13.5, 13.5, 13.25, 13.0, 12.5, 12.5]
    >>> memphis = [15.0, 14.0, 13.75, 13.59, 13.25, 12.97, 12.5, 12.25,
    ...           11.89]
    >>> alexandergovern(atlanta, chicago, houston, memphis)
    AlexanderGovernResult(statistic=6.941146076872535,
                          pvalue=0.03109920451449096)

In some cases, this meant a visual output:

    >>> from scipy.stats import tukeykramer
    >>> group1 = [24.5, 23.5, 26.4, 27.1, 29.9]
    >>> group2 = [28.4, 34.2, 29.5, 32.2, 30.1]
    >>> group3 = [26.1, 28.3, 24.3, 26.2, 27.8]
    >>> tukeykramer(group1, group2, group3)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Comparison between groups with  Simultanious
    (with 95% Confidence Limits and significance at the 0.05 level)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    group     mean      min      max      sig    p-value
    1 - 2    -4.600    -8.249  -0.951     1.0     0.012
    1 - 3    -0.260    -3.909   3.389     0.0     0.980
    2 - 1     4.600     0.951   8.249     1.0     0.012
    2 - 3     4.340     0.691   7.989     1.0     0.017
    3 - 1     0.260    -3.389   3.909     0.0     0.980
    3 - 2    -4.340    -7.989  -0.691     1.0     0.017



### Linear Algebra ([`scipy.linalg`](https://docs.scipy.org/doc/scipy/reference/linalg.html))

I was able to work under a NumFOCUS grant to add support for several new Linear Algebra Package fortran routines with the use of a fortran to python ("f2py") wrapper. My main responsibility was to create a unit test suite to make sure that the routines were wrapped correctly. 

This meant conducting complex matrix calculations performed in Python to check that the function was performing as expected. For example, one of such routines was `?TTRF`, which performed the LU factorization of a tridiagonal matrix, where `L @ U = A`. The fortran routines are much faster than calculations even with NumPy array optimizations. In this grant I was able to refine my not only my linear algebra skills, but have extensive use of unit testing frameworks, continuous integration, as well as collaborating remotely over github.
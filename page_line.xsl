<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="utf-8" />
<xsl:template match="/">
	<html>
		<body>
    
		<p>
			<xsl:apply-templates select="TEI/body" />
		</p>
	</body>
	</html>
	
</xsl:template>

<xsl:template match="lb">
	<xsl:choose>
		<xsl:when test="./@=5">
			<br /><xsl:value-of select="./@n" />&emsp;
		</xsl:when>
		<xsl:otherwise>
			<br />&emsp;
		</xsl:when>
	</xsl:choose>
</xsl:template>

<xsl:template match="pb">
	<br />p.<font color="red"><xsl:value-of select="./@n" /></font>
</xsl:template>

</xsl:stylesheet>
